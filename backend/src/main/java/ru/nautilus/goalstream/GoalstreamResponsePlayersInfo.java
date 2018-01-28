package ru.nautilus.goalstream;

import java.util.HashMap;

enum GoalstreamResponsePlayersInfo {

    NAME{
        @Override
        String getValue(Object rawData) {
            return (String) ((HashMap)rawData).get("name");
        }
    },

    PHOTO{
        @Override
        String getValue(Object rawData) {
            return ((String) ((HashMap)rawData).get("photoUrl")).replace("img_c_26x26", "img_c_200x200");
        }
    },

    AGE{
        @Override
        Integer getValue(Object rawData) {
            return Info.AGE.getValue((String) ((HashMap)rawData).get("info"));
        }
    },

    NUMBER{
        @Override
        Integer getValue(Object rawData) {
            return Integer.valueOf((String) ((HashMap)rawData).get("number"));
        }
    },

    POSITION{
        @Override
        String getValue(Object rawData) {
            return Info.POSITION.getValue((String) ((HashMap)rawData).get("info"));
        }
    },

    MATHES{
        @Override
        Integer getValue(Object rawData) {
            return (int) ((HashMap)rawData).get("matches");
        }
    },

    YELLOW{
        @Override
        Integer getValue(Object rawData) {
            return (int) ((HashMap)rawData).get("yellow");
        }
    },

    RED{
        @Override
        Integer getValue(Object rawData) {
            return (int) ((HashMap)rawData).get("red");
        }
    },

    GOALS{
        @Override
        Integer getValue(Object rawData) {
            return (int) ((HashMap)rawData).get("goals");
        }
    },

    ASSISTS{
        @Override
        Integer getValue(Object rawData) {
            return (int) ((HashMap)rawData).get("assists");
        }
    };

    abstract <T> T getValue(Object rawData);

    enum Info{
        AGE {
            @Override
            Integer getValue(String rawData) {
                return Integer.valueOf((infoParts(rawData)[0]).split( " ")[0]);
            }
        },

        POSITION {
            @Override
            String getValue(String rawData) {
                return infoParts(rawData)[1];
            }
        };

        abstract <T> T getValue(String rawData); //rawData format:  <age>, <position>

        String[] infoParts(String rawData){
            return rawData.split(",");
        }
    }
}
