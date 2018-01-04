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
    public List<ScoresTable> getScoresTableInfo(){
        return mongoTemplate.findAll(ScoresTable.class);
    }
}