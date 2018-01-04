const initialState = {
    data: {},
    state: 'initial'
};

export default (state = initialState, action) => {
    let newState = state;
    switch(action.type) {
        case 'FETCH.EVENT.FULL':
            newState= {
                ...state,
                state: 'receiving'
            };
            break;
        case 'SET.EVENT.FULL':
            newState = {
                ...state,
                data: action.payload,
                state: 'is_established'
            };
            break;
        default:
            //no op
    }
    return newState;
}