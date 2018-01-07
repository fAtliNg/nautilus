import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import playersReducer from './playersReducer'
import photoReducer from './photoReducer'
import videoReducer from './videoReducer'
import scoresTableReducer from './scoresTableReducer'
import eventsReducer from './eventsReducer'
import vkReducer from './vkReducer'
import aboutClubReducer from './aboutClubReducer'

export default combineReducers({
    newsPage: newsReducer,
    playersPage: playersReducer,
    photoPage: photoReducer,
    videoPage: videoReducer,
    scoresTable: scoresTableReducer,
    events: eventsReducer,
    vk: vkReducer,
    aboutPage: aboutClubReducer
});