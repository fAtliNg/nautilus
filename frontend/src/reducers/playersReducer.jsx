const initialState = {
    players: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.PLAYERSPAGE.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.PLAYERSPAGE.DATA':
            newState = {
                ...state,
                players: action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.PLAYERSPAGE.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}