const initialState = {
    entries: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.NEWSPAGE.ENTRIES.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.NEWSPAGE.ENTRIES.DATA':
            newState = {
                ...state,
                entries: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.NEWSPAGE.ENTRIES.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}