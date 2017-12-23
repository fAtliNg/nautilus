package ru.nautilus.service;

import org.springframework.stereotype.Component;
import ru.nautilus.model.*;

@Component
public class DataService {
    public PersonalInfo getPersonalInfo(){
        return new PersonalInfo("Denisenko Sergey", 11);
    }
}