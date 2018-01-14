const initialState = {
    shortEvents: [],
    fullEvent: {},
    pending: false
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.EVENTS.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.EVENTS.DATA':
            newState = {
                ...state,
                shortEvents: action.payload,
                pending: false
            };
            break;
        case 'CLEAR.EVENTS.DATA':
            newState = initialState;
            break;
        case 'SET.EVENT.FULL':
            newState = {
                ...state,
                fullEvent: action.payload,
                pending: false
            };
            break;
        default:
        // no default
    }
    return newState;
}