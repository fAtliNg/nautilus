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