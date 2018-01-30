package ru.nautilus.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ru.nautilus.model.NewsInfo;
import ru.nautilus.model.PlayersInfo;
import ru.nautilus.vk.VkApi;
import ru.nautilus.goalstream.GoalstreamApi;
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

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorGroupMembers(){
        try{
            //TODO::make update mechanizm more smarter
            clearCollection(SubscribersInfo.class);
            mongoTemplate.insertAll(vkApi.getSubscribersList());
        } catch (Exception e) {
            //TODO:: log exception info
        }
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorGroupNews(){
        try{
            //TODO::make update mechanizm more smarter
            clearCollection(NewsInfo.class);
            mongoTemplate.insertAll(vkApi.getNews());
        } catch (Exception e) {
            //TODO:: log exception info
        }
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorScoresTable(){
        //TODO::make update mechanizm more smarter
        clearCollection(ScoresTableInfo.class);
        mongoTemplate.insertAll(goalstreamApi.getScoreTableInfo());
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorPlayersInfo(){
        //TODO::make update mechanizm more smarter
        clearCollection(PlayersInfo.class);
        mongoTemplate.insertAll(goalstreamApi.getPlayersInfo());
    }

    private void clearCollection(Class entityClass){
        mongoTemplate.dropCollection(entityClass);
        mongoTemplate.createCollection(entityClass);
    }
}
