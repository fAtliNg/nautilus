const initialState = {
    data: [],
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
        case 'SET.COMMON.SCORESTABLE.DATA':
            newState = {
                ...state,
                data: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.COMMON.SCORESTABLE.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}