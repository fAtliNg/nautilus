package ru.nautilus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@AllArgsConstructor
@Document(collection = "personalinfo")
public class PersonalInfo {
    private String name;
    private int number;
    private String position;
}