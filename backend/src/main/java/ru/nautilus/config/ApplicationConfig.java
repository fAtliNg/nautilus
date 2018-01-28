package ru.nautilus.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import ru.nautilus.controller.*;
import ru.nautilus.service.DataService;
import ru.nautilus.service.MonitoringService;
import ru.nautilus.goalstream.GoalstreamApi;
import ru.nautilus.goalstream.GoalstreamApiWrapper;
import ru.nautilus.vk.VkApi;
import ru.nautilus.vk.VkApiWrapper;

/**
 * @author Denisenko Denis
 *
 * @note: ApplicationConfig is an analogue of rest-servlet.xml
 */

@Configuration
@EnableWebMvc
@EnableScheduling
@PropertySource("file:/var/lib/nautilus/config.properties")
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
    public ScoresTableDataController getScoresTableDataController() {
        return new ScoresTableDataController();
    }

    @Bean
    public PlayersDataController getPlayersDataController() {
        return new PlayersDataController();
    }

    @Bean
    public PhotoGalleryDataController getPhotoGalleryPreviewDataController() {
        return new PhotoGalleryDataController();
    }

    @Bean
    public VideoGalleryDataController getVideoGalleryPreviewDataController() {
        return new VideoGalleryDataController();
    }

    @Bean
    public VkWidgetDataController getVkWidgetDataController() {
        return new VkWidgetDataController();
    }

    @Bean
    public MonitoringService getMonitoringService(){
        return new MonitoringService();
    }

    @Value("${vk.groupId}")
    private int vkGroupId;

    @Value("${vk.groupAccessToken}")
    private String vkGroupAccessToken;

    @Value("${vk.serviceId}")
    private int vkServiceId;

    @Value("${vk.serviceAccessToken}")
    private String vkServiceAccessToken;

    @Bean
    public VkApi getVkApi(){
        return new VkApiWrapper(vkGroupId, vkGroupAccessToken, vkServiceId, vkServiceAccessToken);
    }

    @Value("${goalstream.scoresTableRequestUrl}")
    private String goalstreamScoresTableRequestUrl;

    @Value("${goalstream.playersInfoRequestUrl}")
    private String goalstreamPlayersInfoRequestUrl;

    @Bean
    public GoalstreamApi getGoalstreamApi(){
        return new GoalstreamApiWrapper(goalstreamScoresTableRequestUrl, goalstreamPlayersInfoRequestUrl);
    }

    @Bean
    public static PropertySourcesPlaceholderConfigurer placeholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }
}
