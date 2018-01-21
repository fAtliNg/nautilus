package ru.nautilus.vk;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import ru.nautilus.model.ScoresTableInfo;
import ru.nautilus.util.JsonReader;

import java.io.*;
import java.util.List;
import java.util.HashMap;
import java.util.stream.Collectors;

/**
 * @author Denisenko Denis
 */
@Component
public class GoalstreamApiWrapper implements GoalstreamApi {

    private final String scoresTableRequestUrl;

    public GoalstreamApiWrapper(String scoresTableRequestUrl) {
        this.scoresTableRequestUrl = scoresTableRequestUrl;
    }

    public List<ScoresTableInfo> getScoreTableInfo(){
        try {
            JSONObject json = JsonReader.readJsonFromUrl(scoresTableRequestUrl);
            return ((JSONArray) json.get("standingsData")).toList().stream()
                        .filter(item -> ((HashMap)item).containsKey("name"))
                        .map(item -> asScoreTableInfo(item))
                        .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private ScoresTableInfo asScoreTableInfo(Object rawData){
        HashMap map = (HashMap)rawData;
        String teamName = (String) map.get("name");
        return new ScoresTableInfo( teamName,
                                    teamName.equalsIgnoreCase("Наутилус"),
                                    (Integer) map.get("played"),
                                    (Integer) map.get("points"));
    }
}
