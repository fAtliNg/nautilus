package ru.nautilus.controller;

import ru.nautilus.model.PersonalInfo;
import ru.nautilus.service.DataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DataController{

    @Autowired
    protected DataService Service;

    @RequestMapping(value = "personalinfo")
    public PersonalInfo getPersonalInfo(){
        return Service.getPersonalInfo();
    }

}
