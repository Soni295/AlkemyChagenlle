export const initState = {
  user: null,
  token: null,
  loading: false
}

export const actionType = {
  LOADING: 'LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED'
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionType.LOADING:
      return {...state}

    case actionType.LOGIN_SUCCESS:
      return {...state}

    case actionType.LOGIN_FAILED:
      return {...state}

    default:
      return {...state}
  }
}
