import {call, put, takeLatest} from 'redux-saga/effects';
import {
    setNewsPageEntriesData,
    setCommonScoresTableData,
    setEventsShortData,
    setPhotoPageAlbumsData,
    setPhotosData,
    setPlayersPageData,
    setVkData
} from "../actions/actions";
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

export function* fetchVkData() {
    try {
        const response = yield call(API.fetchVkData);
        yield put(setVkData(response.data));
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

// PLAYERS PAGE
export function* fetchPlayersPageData() {
    try {
        const response = yield call(API.fetchPlayers);
        yield put(setPlayersPageData(response.data));
    } catch (e) {
        console.log(e);
    }
}

// PHOTO PAGE
export function* fetchPhotoPageAlbumsData() {
    try {
        const response = yield call(API.fetchAlbums);
        yield put(setPhotoPageAlbumsData(response.data));
    } catch (e) {
        console.log(e);
    }
}

export function* fetchPhotosData(action) {
    try {
        const response = yield call(API.fetchPhotos, action.payload);
        yield put(setPhotosData(response.data));
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
        takeLatest('FETCH.VK.DATA', fetchVkData),

        // NEWS PAGE
        takeLatest('FETCH.NEWSPAGE.ENTRIES.DATA', fetchNewsPageEntriesData),

        // PLAYERS PAGE
        takeLatest('FETCH.PLAYERSPAGE.DATA', fetchPlayersPageData),

        // PHOTO PAGE
        takeLatest('FETCH.PHOTOPAGE.ALBUMS.DATA', fetchPhotoPageAlbumsData),
        takeLatest('FETCH.PHOTOS.DATA', fetchPhotosData),

        // EVENTS SHORT
        takeLatest('FETCH.EVENTS.SHORT.DATA', fetchEventsShortData),
    ]
}