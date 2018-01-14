const initialState = {
    text: {},
    achievements: [],
    pending: false
};

export default (state = initialState, action) => {
    let newState = state;
    switch(action.type) {
        case 'FETCH.ABOUT.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.ABOUT.DATA':
            newState = {
                text: action.payload.text,
                achievements: action.payload.achievements,
                pending: false
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