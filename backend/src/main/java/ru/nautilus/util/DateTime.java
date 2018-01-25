package ru.nautilus.util;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

/**
 * @author Denisenko Denis
 */
public final class DateTime {

    private final static String DATE_FORMAT = "dd/MM/yyyy";

    public static String unixTimeToString(Integer unixTime){
        return new SimpleDateFormat(DATE_FORMAT).format(Date.from(Instant.ofEpochSecond(unixTime)));
    }
}
