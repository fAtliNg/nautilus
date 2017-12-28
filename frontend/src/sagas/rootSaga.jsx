import {call, put, takeLatest} from 'redux-saga/effects';
import {setNewsPageEntriesData, setCommonScoresTableData, setEventsShortData} from "../actions/actions";
import * as API from '../api/api';

// COMMON
export function* fetchCommonScoresTable() {
    try {
        const response = yield call(API.fetchCommonScoresTable);
        yield put(setCommonScoresTableData(response.data));
    } catch (e) {
        console.log(e);
    }
}

// NEWS PAGE
export function* fetchNewsPageEntriesData() {
    try {
        const response = yield call(API.fetchEntries);
        yield put(setNewsPageEntriesData(response.data));
    } catch (e) {
        console.log(e);
    }
}

// EVENTS SHORT
export function* fetchEventsShortData() {
    try {
        const response = yield call(API.fetchEventsShort);
        yield put(setEventsShortData(response.data));
    } catch (e) {
        console.log(e);
    }
}

export default function* root() {
    yield [
        // COMMON
        takeLatest('FETCH.COMMON.SCORESTABLE.DATA', fetchCommonScoresTable),

        // NEWS PAGE
        takeLatest('FETCH.NEWSPAGE.ENTRIES.DATA', fetchNewsPageEntriesData),

        // EVENTS SHORT
        takeLatest('FETCH.EVENTS.SHORT.DATA', fetchEventsShortData),
    ]
}