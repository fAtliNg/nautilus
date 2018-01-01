// COMMON
export const fetchCommonScoresTableData = () => ({
    type: 'FETCH.COMMON.SCORESTABLE.DATA'
});

export const setCommonScoresTableData = payload => ({
    type: 'SET.COMMON.SCORESTABLE.DATA',
    payload: payload
});

export const clearCommonScoresTableData = payload => ({
    type: 'CLEAR.COMMON.SCORESTABLE.DATA'
});

// NEWS PAGE
export const fetchNewsPageEntriesData = () => ({
    type: 'FETCH.NEWSPAGE.ENTRIES.DATA'
});

export const setNewsPageEntriesData = payload => ({
    type: 'SET.NEWSPAGE.ENTRIES.DATA',
    payload: payload
});

export const clearNewsPageEntriesData = payload => ({
    type: 'CLEAR.NEWSPAGE.ENTRIES.DATA'
});

// PLAYERS PAGE
export const fetchPlayersPageData = () => ({
    type: 'FETCH.PLAYERSPAGE.DATA'
});

export const setPlayersPageData = payload => ({
    type: 'SET.PLAYERSPAGE.DATA',
    payload: payload
});

export const clearPlayersPageData = payload => ({
    type: 'CLEAR.PLAYERSPAGE.DATA'
});

// PHOTO PAGE
export const fetchPhotoPageAlbumsData = () => ({
    type: 'FETCH.PHOTOPAGE.ALBUMS.DATA'
});

export const setPhotoPageAlbumsData = payload => ({
    type: 'SET.PHOTOPAGE.ALBUMS.DATA',
    payload: payload
});

export const clearPhotoPageAlbumsData = payload => ({
    type: 'CLEAR.PHOTOPAGE.ALBUMS.DATA'
});

export const fetchPhotosData = payload => ({
    type: 'FETCH.PHOTOS.DATA',
    payload: payload
});

export const setPhotosData = payload => ({
    type: 'SET.PHOTOS.DATA',
    payload: payload
});

export const clearPhotosData = payload => ({
    type: 'CLEAR.PHOTOS.DATA'
});

// EVENTS SHORT
export const fetchEventsShortData = () => ({
    type: 'FETCH.EVENTS.SHORT.DATA'
});

export const setEventsShortData = payload => ({
    type: 'SET.EVENTS.SHORT.DATA',
    payload: payload
});

export const clearEventsShortData = payload => ({
    type: 'CLEAR.EVENTS.SHORT.DATA'
});