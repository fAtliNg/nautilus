package ru.nautilus.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import ru.nautilus.controller.DataController;
import ru.nautilus.service.DataService;

/**
 * @author Denisenko Denis
 *
 * @note: ApplicationConfig is an analogue of rest-servlet.xml
 */

@Configuration
@EnableWebMvc
public class ApplicationConfig {

    @Bean(name = "dataServise")
    @Scope(value = "prototype")
    public DataService getDataService() {
       return new DataService();
    }

    @Bean(name = "dataController")
    public DataController getDataController() {
        return new DataController();
    }
}
