import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import scoresTableReducer from './scoresTableReducer'

export default combineReducers({
    newsPage: newsReducer,
    scoresTable: scoresTableReducer
});