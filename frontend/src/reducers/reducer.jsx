import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import scoresTableReducer from './scoresTableReducer'
import eventsShortReducer from './eventsShortReducer'

export default combineReducers({
    newsPage: newsReducer,
    scoresTable: scoresTableReducer,
    eventsShort: eventsShortReducer
});