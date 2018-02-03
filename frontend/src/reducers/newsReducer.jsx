const initialState = {
  entries: [],
  pending: false
}

export default (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case 'FETCH.NEWSPAGE.ENTRIES.DATA':
      newState = {
        ...state,
        pending: true
      }
      break
    case 'SET.NEWSPAGE.ENTRIES.DATA':
      newState = {
        ...state,
        entries: action.payload,
        pending: false
      }
      break
    case 'CLEAR.NEWSPAGE.ENTRIES.DATA':
      newState = initialState
      break
    default:
        // no default
  }
  return newState
}
