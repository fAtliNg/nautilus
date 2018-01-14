const initialState = {
    albums: [],
    videos: [],
    pending: false
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.VIDEOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.VIDEOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: action.payload,
                pending: false
            };
            break;
        case 'CLEAR.VIDEOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: [],
                pending: false
            };
            break;
        case 'FETCH.VIDEOS.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.VIDEOS.DATA':
            newState = {
                ...state,
                videos: action.payload,
                pending: false
            };
            break;
        case 'CLEAR.VIDEOS.DATA':
            newState = {
                ...state,
                videos: [],
                pending: false
            };
            break;
        default:
        // no default
    }
    return newState;
}