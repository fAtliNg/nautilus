package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.EventInfo;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * @author Denisenko Denis
 */
@RestController
@RequestMapping("/events")
public class EventsDataController {

    @Autowired
    protected DataService Service;

    @RequestMapping(value = "/getall", method = GET)
    public List<EventInfo> getAllEvents() {
        return Service.getEventsInfo();
    }

    @RequestMapping(value = "/getall", params = "limit", method = GET)
    @ResponseBody
    public List<EventInfo> getAllEvents(@RequestParam("limit") int limit) {
        final List<EventInfo> allEvents = Service.getEventsInfo();
        return allEvents.subList(0, Math.min(allEvents.size(), limit));
    }
}
