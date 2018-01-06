package ru.nautilus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Denisenko Denis
 */

@AllArgsConstructor
@Getter
@Setter
@Document(collection = "events")
public class EventInfo {
    String place;
    String emblemhome;
    String emblemaway;
    String date;
    String time;
    String home;
    String away;
    String score;
}
