package ru.nautilus.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import ru.nautilus.controller.*;
import ru.nautilus.service.DataService;

/**
 * @author Denisenko Denis
 *
 * @note: ApplicationConfig is an analogue of rest-servlet.xml
 */

@Configuration
@EnableWebMvc
public class ApplicationConfig {

    @Bean
    @Scope(value = "prototype")
    public DataService getDataService() {
       return new DataService();
    }

    @Bean
    public EventsDataController getEventsDataController() {
        return new EventsDataController();
    }

    @Bean
    public NewsDataController getNewsDataController() {
        return new NewsDataController();
    }

    @Bean
    public ScoresTableDataController getScoresTableDataController() { return new ScoresTableDataController(); }

    @Bean
    public PlayersDataController getPlayersDataController() { return new PlayersDataController(); }

    @Bean
    public PhotoGalleryDataController getPhotoGalleryPreviewDataController() { return new PhotoGalleryDataController(); }

    @Bean
    public VideoGalleryDataController getVideoGalleryPreviewDataController() { return new VideoGalleryDataController(); }
}
