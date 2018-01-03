package ru.nautilus.config;

import com.mongodb.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * @author Denisenko Denis
 */

@Configuration
@EnableMongoRepositories
public class MongoConfig extends AbstractMongoConfiguration {

    @Override
    protected String getDatabaseName() {
        return "nautilus";
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient("127.0.0.1", 27017);
    }

    @Override
    protected String getMappingBasePackage() {
        return "ru.nautilus.repository";
    }

}
