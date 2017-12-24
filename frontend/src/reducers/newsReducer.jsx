const initialState = {
    certificates: [],
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.NEWS.DATA':
            newState = {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.NEWS.DATA':
            newState = {
                ...action.payload,
                state: 'is_established'
            };
            break;
        case 'CLEAR.NEWS.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}