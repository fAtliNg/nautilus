package ru.nautilus.config;

import com.mongodb.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * @author Denisenko Denis
 */

@Configuration
@EnableMongoRepositories
@PropertySource("file:/var/lib/config/config.properties")
public class MongoConfig extends AbstractMongoConfiguration {

    @Value("${mongodb.host}")
    private String mongoHost;

    @Value("${mongodb.port}")
    private int mongoPort;

    @Value("${mongodb.databaseName}")
    private String databaseName;

    @Value("${mongodb.basePackageRepository}")
    private String basePackageRepository;

    @Override
    protected String getDatabaseName() {
        return databaseName;
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(mongoHost, mongoPort);
    }

    @Override
    protected String getMappingBasePackage() {
        return basePackageRepository;
    }

}
