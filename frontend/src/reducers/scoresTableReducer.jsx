const initialState = {
  data: [],
  pending: false
}

export default (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case 'FETCH.COMMON.SCORESTABLE.DATA':
      newState = {
        ...state,
        pending: true
      }
      break
    case 'SET.COMMON.SCORESTABLE.DATA':
      newState = {
        ...state,
        data: action.payload,
        pending: false
      }
      break
    case 'CLEAR.COMMON.SCORESTABLE.DATA':
      newState = initialState
      break
    default:
        // no default
  }
  return newState
}
