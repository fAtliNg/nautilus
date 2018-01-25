package ru.nautilus.vk;

import com.vk.api.sdk.exceptions.ApiException;
import com.vk.api.sdk.exceptions.ClientException;
import ru.nautilus.model.NewsInfo;
import ru.nautilus.model.SubscribersInfo;

import java.util.List;


/**
 * @author Denisenko Denis
 */
public interface VkApi {

    List<SubscribersInfo> getSubscribersList() throws ClientException, ApiException;
    List<NewsInfo> getNews() throws ClientException, ApiException;
}
