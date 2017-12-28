const initialState = {
    data: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.EVENTS.SHORT.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.EVENTS.SHORT.DATA':
            newState = {
                ...state,
                data: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.EVENTS.SHORT.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}