import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import photoReducer from './photoReducer'
import scoresTableReducer from './scoresTableReducer'
import eventsShortReducer from './eventsShortReducer'

export default combineReducers({
    newsPage: newsReducer,
    photoPage: photoReducer,
    scoresTable: scoresTableReducer,
    eventsShort: eventsShortReducer
});