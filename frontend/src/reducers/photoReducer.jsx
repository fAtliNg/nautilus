const initialState = {
    albums: [],
    photos: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.PHOTOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.PHOTOPAGE.ALBUMS.DATA':
            newState = {
                ...state,
                albums: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.PHOTOPAGE.ALBUMS.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}