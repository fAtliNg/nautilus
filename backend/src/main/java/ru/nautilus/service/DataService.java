package ru.nautilus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
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

    public List<PhotoAlbumInfo> getPhotoAlbumInfo(){
        return mongoTemplate.findAll(PhotoAlbumInfo.class);
    }

    public List<VideoGalleryPreviewInfo> getVideoGalleryPreviewInfo(){
        return mongoTemplate.findAll(VideoGalleryPreviewInfo.class);
    }

    public List<PhotoInfo> getPhotoByAlbum(int id){
        return mongoTemplate.find(query(where("albumid").is(id)), PhotoInfo.class);
    }

    public List<VideoAlbumInfo> getVideoAlbumInfo(int id){
        return mongoTemplate.find(query(where("albumid").is(id)), VideoAlbumInfo.class);
    }

    public List<SubscribersInfo> getSubscribersInfo(){
        return mongoTemplate.findAll(SubscribersInfo.class);
    }
}