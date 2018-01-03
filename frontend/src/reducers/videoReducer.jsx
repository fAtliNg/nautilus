const initialState = {
    albums: [],
    videos: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.VIDEOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.VIDEOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.VIDEOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: [],
                state: 'initial'
            };
            break;
        case 'FETCH.VIDEOS.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.VIDEOS.DATA':
            newState = {
                ...state,
                videos: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.VIDEOS.DATA':
            newState = {
                ...state,
                videos: [],
                state: 'initial'
            };
            break;
        default:
        // no default
    }
    return newState;
}