package ru.nautilus.util;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

/**
 * @author Denisenko Denis
 */
public final class DateTime {

    public static Date unixTimeToDate(Integer unixTime){
        return Date.from(Instant.ofEpochSecond(unixTime));
    }
}
