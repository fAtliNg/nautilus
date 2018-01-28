package ru.nautilus.goalstream;

import ru.nautilus.model.PlayersInfo;
import ru.nautilus.model.ScoresTableInfo;

import java.util.List;

public interface GoalstreamApi {

    List<ScoresTableInfo> getScoreTableInfo();
    List<PlayersInfo> getPlayersInfo();
}
