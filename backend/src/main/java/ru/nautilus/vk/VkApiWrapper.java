package ru.nautilus.vk;

import com.vk.api.sdk.client.VkApiClient;
import com.vk.api.sdk.client.actors.GroupActor;
import com.vk.api.sdk.client.actors.ServiceActor;
import com.vk.api.sdk.exceptions.ApiException;
import com.vk.api.sdk.exceptions.ClientException;
import com.vk.api.sdk.httpclient.HttpTransportClient;
import com.vk.api.sdk.objects.groups.responses.GetMembersResponse;
import com.vk.api.sdk.objects.users.UserXtrCounters;
import com.vk.api.sdk.objects.wall.WallPostFull;
import com.vk.api.sdk.objects.wall.WallpostAttachment;
import com.vk.api.sdk.objects.wall.WallpostAttachmentType;
import com.vk.api.sdk.objects.wall.responses.GetResponse;
import com.vk.api.sdk.queries.users.UserField;
import org.springframework.stereotype.Component;
import ru.nautilus.model.NewsInfo;
import ru.nautilus.model.SubscribersInfo;
import ru.nautilus.util.DateTime;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author Denisenko Denis
 */
@Component
public class VkApiWrapper implements VkApi {

    private final VkApiClient vkApiClient = new VkApiClient(HttpTransportClient.getInstance());
    private final GroupActor groupActor;
    private final ServiceActor serviceActor;

    private static final int NEWS_COUNT = 5;

    public VkApiWrapper(int groupId, String groupAccessToken, int serviceId, String serviceAccessToken){
        groupActor = new GroupActor(-groupId, groupAccessToken);
        serviceActor = new ServiceActor(serviceId, serviceAccessToken);
    }

    public List<SubscribersInfo> getSubscribersList() throws ClientException, ApiException {

        GetMembersResponse getMembersResponse = vkApiClient.groups().
                getMembers(groupActor).groupId(String.valueOf(groupActor.getId())).execute();

        List<String> subscriberIds = getMembersResponse.getItems().stream()
                                            .map(value -> String.valueOf(value))
                                            .collect(Collectors.toList());

        List<UserXtrCounters> members  = vkApiClient.users().get(groupActor)
                                            .userIds(subscriberIds)
                                            .fields(new UserField[]{UserField.PHOTO_50, UserField.SCREEN_NAME})
                                            .execute();

        LinkedList<SubscribersInfo> subscribers = new LinkedList<>();

        members.forEach(member -> subscribers.add(
                new SubscribersInfo(member.getFirstName(),
                        member.getPhoto50(), "http://vk.com/" + member.getScreenName())));

        return subscribers;
    }

    public List<NewsInfo> getNews() throws ClientException, ApiException{
        GetResponse response = vkApiClient.wall().get(serviceActor)
                .ownerId(groupActor.getGroupId()).count(NEWS_COUNT).execute();

        return response.getItems().stream()
                    .filter(post -> (post.getIsPinned() == null) &&
                                    (getPhotoAttachmentsFromPost(post).count() > 0))
                    .map(post -> createNewsInfo(post))
                    .collect(Collectors.toList());
    }

    private Stream getPhotoAttachmentsFromPost(WallPostFull post){
        return post.getAttachments().stream().filter(attach -> attach.getType() == WallpostAttachmentType.PHOTO);
    }

    private NewsInfo createNewsInfo(WallPostFull post){
        WallpostAttachment photoAttachment =
                (WallpostAttachment) getPhotoAttachmentsFromPost(post).findAny().get();

        return new NewsInfo(    DateTime.unixTimeToDate(post.getDate()),
                                photoAttachment.getPhoto().getPhoto604(),
                                post.getText());
    }
}
