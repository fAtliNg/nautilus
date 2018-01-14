const initialState = {
    text: {},
    achievements: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch(action.type) {
        case 'FETCH.ABOUT.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.ABOUT.DATA':
            newState = {
                text: action.payload.text,
                achievements: action.payload.achievements,
                state: 'is_established'
            };
            break;
        case 'CLEAR.ABOUT.DATA':
            newState = initialState;
            break;
        default:
            // no op
    }
    return newState;
}