package ru.nautilus.vk;

import com.vk.api.sdk.client.VkApiClient;
import com.vk.api.sdk.client.actors.GroupActor;
import com.vk.api.sdk.client.actors.ServiceActor;
import com.vk.api.sdk.exceptions.ApiException;
import com.vk.api.sdk.exceptions.ClientException;
import com.vk.api.sdk.httpclient.HttpTransportClient;
import com.vk.api.sdk.objects.groups.responses.GetMembersResponse;
import com.vk.api.sdk.objects.photos.Photo;
import com.vk.api.sdk.objects.photos.responses.GetAlbumsResponse;
import com.vk.api.sdk.objects.users.UserXtrCounters;
import com.vk.api.sdk.objects.wall.WallPostFull;
import com.vk.api.sdk.objects.wall.WallpostAttachment;
import com.vk.api.sdk.objects.wall.WallpostAttachmentType;
import com.vk.api.sdk.objects.wall.responses.GetResponse;
import com.vk.api.sdk.queries.users.UserField;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import ru.nautilus.model.NewsInfo;
import ru.nautilus.model.PhotoInfo;
import ru.nautilus.model.PhotoAlbumInfo;
import ru.nautilus.model.SubscribersInfo;
import ru.nautilus.util.DateTime;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author Denisenko Denis
 */
@Component
public class VkApiWrapper implements VkApi {

    private static final Logger log = LogManager.getLogger(VkApiWrapper.class);

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

    public List<PhotoAlbumInfo> getPhotoGalleryInfo() throws ClientException, ApiException{
        GetAlbumsResponse response = vkApiClient.photos().
                getAlbums(serviceActor).ownerId(groupActor.getGroupId()).execute();

        return response.getItems().stream()
                .filter(item -> item.getSize() > 0)
                .map(item -> new PhotoAlbumInfo(
                                    item.getId(),
                                    getThumbById(item.getId(), item.getThumbId()),
                                    item.getDescription(),
                                    item.getTitle()))
                .collect(Collectors.toList());
    }

    private String getThumbById(Integer albumId, Integer thumbId){
        Optional<Photo> thumb = null;
        try {
            thumb = vkApiClient.photos()
                        .get(serviceActor)
                        .ownerId(groupActor.getGroupId())
                        .albumId(String.valueOf(albumId)).execute()
                        .getItems().stream()
                            .filter(item -> item.getId().equals(thumbId))
                            .findAny();
        } catch (Exception e) {
            log.error(e, e);
        }

        if(thumb.isPresent())
            return thumb.get().getPhoto604();
        return "";
    }

    public List<PhotoInfo> getPhotoAlbumInfo(String albumId) throws ClientException, ApiException {

        return vkApiClient.photos()
                .get(serviceActor)
                .ownerId(groupActor.getGroupId())
                .albumId(albumId).execute()
                        .getItems().stream()
                        .map(photo -> new PhotoInfo(
                                            photo.getAlbumId(),
                                            photo.getPhoto1280(),
                                            photo.getPhoto604()))
                        .collect(Collectors.toList());
    }
}
