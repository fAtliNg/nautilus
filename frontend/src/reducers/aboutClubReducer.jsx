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
                ...state,
                text: action.payload,
                state: 'is_established'
            };
            break;
        case 'SET.ACHIEVEMENTS':
            newState = {
                ...state,
                achievements: action.payload,
                state: 'is_established'
            }
        default:
            // no op
    }
    return newState;
}