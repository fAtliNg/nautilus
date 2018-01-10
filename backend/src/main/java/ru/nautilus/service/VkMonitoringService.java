package ru.nautilus.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ru.nautilus.model.SubscribersInfo;
import ru.nautilus.vk.VkApiWrapper;

/**
 * @author Denisenko Denis
 */
@Component
public class VkMonitoringService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private VkApiWrapper vkApiWrapper;

    @Scheduled(fixedDelay = 24 * 60 * 60 * 1000)//once per day
    public void monitorGroupMembers(){
        try{
            //TODO::make update mechanizm more smarter
            mongoTemplate.dropCollection(SubscribersInfo.class);
            mongoTemplate.createCollection(SubscribersInfo.class);
            mongoTemplate.insertAll(vkApiWrapper.getSubscribersList());
        } catch (Exception e) {
            //TODO:: log exception info
        }
    }
}
