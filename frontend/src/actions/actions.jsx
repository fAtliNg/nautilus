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