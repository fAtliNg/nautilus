package ru.nautilus.service;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ru.nautilus.model.*;
import ru.nautilus.vk.VkApi;
import ru.nautilus.goalstream.GoalstreamApi;

import java.util.List;


/**
 * @author Denisenko Denis
 */
@Component
public class MonitoringService {

    private static final Logger log = LogManager.getLogger(MonitoringService.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private VkApi vkApi;

    @Autowired
    private GoalstreamApi goalstreamApi;

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorGroupMembers(){
        try{
            log.info("Monitoring vk group members start..");

            //TODO::make update mechanizm more smarter
            clearCollection(SubscribersInfo.class);
            mongoTemplate.insertAll(vkApi.getSubscribersList());

            log.info("Monitoring vk group members finish successfull");
        } catch (Exception e) {
            log.error(e, e);
        }
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorGroupNews(){
        try{
            log.info("Monitoring vk group news start..");

            //TODO::make update mechanizm more smarter
            clearCollection(NewsInfo.class);
            mongoTemplate.insertAll(vkApi.getNews());

            log.info("Monitoring vk group news finish successfull");
        } catch (Exception e) {
            log.error(e, e);
        }
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorScoresTable(){
        log.info("Monitoring score table start..");

        //TODO::make update mechanizm more smarter
        clearCollection(ScoresTableInfo.class);
        mongoTemplate.insertAll(goalstreamApi.getScoreTableInfo());

        log.info("Monitoring score table finish successfull");
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorPlayersInfo(){
        log.info("Monitoring players info start..");

        //TODO::make update mechanizm more smarter
        clearCollection(PlayersInfo.class);
        mongoTemplate.insertAll(goalstreamApi.getPlayersInfo());

        log.info("Monitoring players finish successfull");
    }

    @Scheduled(fixedDelay = 60 * 60 * 1000)//once per hour
    public void monitorMediaContent(){
        try{
            log.info("Monitoring media content start..");

            //TODO::make update mechanizm more smarter
            clearCollection(PhotoAlbumInfo.class);
            clearCollection(PhotoInfo.class);

            List<PhotoAlbumInfo> albumsInfo = vkApi.getPhotoGalleryInfo();
            mongoTemplate.insertAll(albumsInfo);

            albumsInfo.forEach(album ->{
                try {
                    mongoTemplate.insertAll(vkApi.getPhotoAlbumInfo(String.valueOf(album.getId())));
                } catch (Exception e) {
                    log.error(e, e);
                }
            });
            mongoTemplate.insertAll(vkApi.getSubscribersList());

            log.info("Monitoring media content finish successfull");
        } catch (Exception e) {
            log.error(e, e);
        }
    }

    private void clearCollection(Class entityClass){
        mongoTemplate.dropCollection(entityClass);
        mongoTemplate.createCollection(entityClass);
    }
}
