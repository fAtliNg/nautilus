package ru.nautilus.vk;

import com.vk.api.sdk.client.VkApiClient;
import com.vk.api.sdk.client.actors.GroupActor;
import com.vk.api.sdk.exceptions.ApiException;
import com.vk.api.sdk.exceptions.ClientException;
import com.vk.api.sdk.httpclient.HttpTransportClient;
import com.vk.api.sdk.objects.groups.responses.GetMembersResponse;
import com.vk.api.sdk.objects.users.UserXtrCounters;
import com.vk.api.sdk.queries.users.UserField;
import org.springframework.stereotype.Component;
import ru.nautilus.model.SubscribersInfo;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Denisenko Denis
 */
@Component
public class VkApiWrapper {

    private final int groupId;
    private final VkApiClient vkApiClient = new VkApiClient(HttpTransportClient.getInstance());
    private final GroupActor groupActor;

    public VkApiWrapper(int groupId, String accessToken){
        this.groupId = groupId;
        groupActor = new GroupActor(-groupId, accessToken);
    }

    public List<SubscribersInfo> getSubscribersList() throws ClientException, ApiException {

        GetMembersResponse getMembersResponse = vkApiClient.groups().
                getMembers(groupActor).groupId(String.valueOf(groupId)).execute();

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
}
