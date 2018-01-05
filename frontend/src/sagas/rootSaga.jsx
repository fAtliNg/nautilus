import {call, put, takeLatest} from 'redux-saga/effects';
import {
    setNewsPageEntriesData,
    setCommonScoresTableData,
    setEventsData,
    setEventFull,
    setPhotoPageAlbumsData,
    setPhotosData,
    setVideoPageAlbumsData,
    setVideosData,
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
        const response = yield call(API.fetchPhotoAlbums);
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

// VIDEO PAGE
export function* fetchVideoPageAlbumsData() {
    try {
        const response = yield call(API.fetchVideoAlbums);
        yield put(setVideoPageAlbumsData(response.data));
    } catch (e) {
        console.log(e);
    }
}

export function* fetchVideosData(action) {
    try {
        const response = yield call(API.fetchVideos, action.payload);
        yield put(setVideosData(response.data));
    } catch (e) {
        console.log(e);
    }
}

// EVENTS SHORT
export function* fetchEventsData() {
    try {
        console.log('fetchEventsData');
        const response = yield call(API.fetchEvents);
        console.log('response', response.data);
        yield put(setEventsData(response.data));
        yield put(setEventFull(response.data.reduce((l,e) => e.date > l.date ? e : l)));
    } catch (e) {
        console.log(e);
    }
}

// EVENT FULL
export function* fetchEventFull() {
    try {
        const response = yield call(API.fetchEvents);
        yield put(setEventFull(response.data.reduce((l,e) => e.date > l.date ? e : l)));
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

        // VIDEO PAGE
        takeLatest('FETCH.VIDEOPAGE.ALBUMS.DATA', fetchVideoPageAlbumsData),
        takeLatest('FETCH.VIDEOS.DATA', fetchVideosData),

        // EVENTS
        takeLatest('FETCH.EVENTS.DATA', fetchEventsData),

        // EVENT FULL
        // takeLatest('FETCH.EVENT.FULL', fetchEventFull),
    ]
}