package ru.nautilus.goalstream;

import java.util.HashMap;

public enum GoalstreamResponseScoreTableInfo {

    NAME {
        @Override
        String getValue(Object rawData) {
            return (String) ((HashMap)rawData).get("name");
        }
    },

    IS_OWNER{
        @Override
        Boolean getValue(Object rawData) {
            return ((String)NAME.getValue(rawData)).equalsIgnoreCase("Наутилус");
        }
    },

    GAMES{
        @Override
        Integer getValue(Object rawData) {
            return (Integer) ((HashMap)rawData).get("played");
        }
    },

    POINTS{
        @Override
        Integer getValue(Object rawData) {
            return (Integer) ((HashMap)rawData).get("points");
        }
    };

    abstract <T> T getValue(Object rawData);
}
