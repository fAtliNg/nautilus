package ru.nautilus.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ru.nautilus.vk.VkApi;
import ru.nautilus.vk.GoalstreamApi;
import ru.nautilus.model.SubscribersInfo;
import ru.nautilus.model.ScoresTableInfo;

/**
 * @author Denisenko Denis
 */
@Component
public class MonitoringService {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private VkApi vkApi;

    @Autowired
    private GoalstreamApi goalstreamApi;

    @Scheduled(fixedDelay = 24 * 60 * 60 * 1000)//once per day
    public void monitorGroupMembers(){
        try{
            //TODO::make update mechanizm more smarter
            clearCollection(SubscribersInfo.class);
            mongoTemplate.insertAll(vkApi.getSubscribersList());
        } catch (Exception e) {
            //TODO:: log exception info
        }
    }

    @Scheduled(fixedDelay = 24 * 60 * 60 * 1000)//once per day
    public void monitorScoresTable(){
        //TODO::make update mechanizm more smarter
        clearCollection(ScoresTableInfo.class);
        mongoTemplate.insertAll(goalstreamApi.getScoreTableInfo());
    }

    private void clearCollection(Class entityClass){
        mongoTemplate.dropCollection(entityClass);
        mongoTemplate.createCollection(entityClass);
    }
}
