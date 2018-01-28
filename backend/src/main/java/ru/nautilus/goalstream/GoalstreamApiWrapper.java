package ru.nautilus.goalstream;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import ru.nautilus.model.PlayersInfo;
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
    private final String playersInfoRequestUrl;

    public GoalstreamApiWrapper(String scoresTableRequestUrl, String playersInfoRequestUrl) {
        this.scoresTableRequestUrl = scoresTableRequestUrl;
        this.playersInfoRequestUrl = playersInfoRequestUrl;
    }

    public List<ScoresTableInfo> getScoreTableInfo(){
        try {
            JSONObject json = JsonReader.readJsonFromUrl(scoresTableRequestUrl);
            return ((JSONArray) json.get("standingsData")).toList().stream()
                        .filter(item -> ((HashMap)item).containsKey("name"))
                        .map(item -> new ScoresTableInfo(
                                            GoalstreamResponseScoreTableInfo.NAME.getValue(item),
                                            GoalstreamResponseScoreTableInfo.IS_OWNER.getValue(item),
                                            GoalstreamResponseScoreTableInfo.GAMES.getValue(item),
                                            GoalstreamResponseScoreTableInfo.POINTS.getValue(item)))
                        .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<PlayersInfo> getPlayersInfo(){
        try {
            JSONObject json = JsonReader.readJsonFromUrl(playersInfoRequestUrl);
            return ((JSONArray) json.get("items")).toList().stream()
                    .map(item -> new PlayersInfo(
                                        GoalstreamResponsePlayersInfo.NAME.getValue(item),
                                        GoalstreamResponsePlayersInfo.PHOTO.getValue(item),
                                        GoalstreamResponsePlayersInfo.AGE.getValue(item),
                                        GoalstreamResponsePlayersInfo.NUMBER.getValue(item),
                                        GoalstreamResponsePlayersInfo.POSITION.getValue(item),
                                        GoalstreamResponsePlayersInfo.MATHES.getValue(item),
                                        GoalstreamResponsePlayersInfo.YELLOW.getValue(item),
                                        GoalstreamResponsePlayersInfo.RED.getValue(item),
                                        GoalstreamResponsePlayersInfo.GOALS.getValue(item),
                                        GoalstreamResponsePlayersInfo.ASSISTS.getValue(item)))
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
