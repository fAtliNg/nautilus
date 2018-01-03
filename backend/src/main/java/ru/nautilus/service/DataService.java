package ru.nautilus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;
import ru.nautilus.model.*;


@Component
public class DataService {

    @Autowired
    MongoTemplate mongoTemplate;

    public PersonalInfo getPersonalInfo(){
        return mongoTemplate.findOne(Query.query(Criteria.where("number").is(11)), PersonalInfo.class);
    }
}