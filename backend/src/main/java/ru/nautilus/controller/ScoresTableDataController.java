package ru.nautilus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nautilus.model.ScoresTable;
import ru.nautilus.service.DataService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/scorestable")
public class ScoresTableDataController {
    @Autowired
    protected DataService Service;

    @RequestMapping(method = GET)
    public List<ScoresTable> getScoresTable() { return Service.getScoresTableInfo(); }
}
