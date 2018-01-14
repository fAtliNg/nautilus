const initialState = {
    albums: [],
    photos: [],
    pending: false
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.PHOTOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.PHOTOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: action.payload,
                pending: false
            };
            break;
        case 'CLEAR.PHOTOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: [],
                pending: false
            };
            break;
        case 'FETCH.PHOTOS.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.PHOTOS.DATA':
            newState = {
                ...state,
                photos: action.payload,
                pending: false
            };
            break;
        case 'CLEAR.PHOTOS.DATA':
            newState = {
                ...state,
                photos: [],
                pending: false
            };
            break;
        default:
        // no default
    }
    return newState;
}