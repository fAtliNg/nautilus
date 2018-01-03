const initialState = {
    data: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.EVENTS.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.EVENTS.DATA':
            newState = {
                ...state,
                data: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.EVENTS.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}