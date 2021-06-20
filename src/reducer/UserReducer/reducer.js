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
      return {...state, loading: true}

    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      }

    case actionType.LOGIN_FAILED:
      return {...state, loading: false}

    default:
      console.log('error')
      return {...state}
  }
}
