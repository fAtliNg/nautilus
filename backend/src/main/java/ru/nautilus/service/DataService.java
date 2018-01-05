package ru.nautilus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import ru.nautilus.model.*;

import java.util.List;


@Component
public class DataService {

    @Autowired
    MongoTemplate mongoTemplate;

    public List<EventInfo> getEventsInfo(){
        return mongoTemplate.findAll(EventInfo.class);
    }
    public List<NewsInfo> getNewsInfo(){
        return mongoTemplate.findAll(NewsInfo.class);
    }
    public List<ScoresTableInfo> getScoresTableInfo(){
        return mongoTemplate.findAll(ScoresTableInfo.class);
    }
    public List<PlayersInfo> getPlayersInfo(){
        return mongoTemplate.findAll(PlayersInfo.class);
    }
    public List<PhotoGalleryPreviewInfo> getPhotoGalleryPreviewInfo(){ return mongoTemplate.findAll(PhotoGalleryPreviewInfo.class); }
    public List<VideoGalleryPreviewInfo> getVideoGalleryPreviewInfo(){ return mongoTemplate.findAll(VideoGalleryPreviewInfo.class); }
}