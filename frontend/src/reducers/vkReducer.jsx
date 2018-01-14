const initialState = {
    data: {},
    pending: false
};

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'FETCH.VK.DATA':
            newState = {
                ...state,
                pending: true
            };
            break;
        case 'SET.VK.DATA':
            newState = {
                ...state,
                data: action.payload,
                pending: false
            };
            break;
        case 'CLEAR.VK.DATA':
            newState = initialState;
            break;
        default:
        // no default
    }
    return newState;
}