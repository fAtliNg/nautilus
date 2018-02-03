const initialState = {
  players: [],
  pending: false
}

export default (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case 'FETCH.PLAYERSPAGE.DATA':
      newState = {
        ...state,
        pending: true
      }
      break
    case 'SET.PLAYERSPAGE.DATA':
      newState = {
        ...state,
        players: action.payload,
        pending: false
      }
      break
    case 'CLEAR.PLAYERSPAGE.DATA':
      newState = initialState
      break
    default:
        // no default
  }
  return newState
}
