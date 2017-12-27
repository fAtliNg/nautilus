import {call, put, takeLatest} from 'redux-saga/effects';
import {setNewsPageEntriesData} from "../actions/actions";
import * as API from '../api/api';

// NEWS PAGE
export function* fetchNewsPageEntriesData() {
    try {
        const response = yield call(API.fetchEntries);
        yield put(setNewsPageEntriesData(response.data));
    } catch (e) {
        console.log(e);
    }
}

export default function* root() {
    yield [
        // NEWS PAGE
        takeLatest('FETCH.NEWSPAGE.ENTRIES.DATA', fetchNewsPageEntriesData),
    ]
}