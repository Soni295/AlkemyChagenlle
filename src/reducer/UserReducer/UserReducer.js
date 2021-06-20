import { useReducer } from 'react'
import { initState, actionType, reducer } from './reducer'

export const UserReducer = () => {
  const [session, setSession] = useReducer(reducer, initState)

  const dispatch = {
    loading: () =>
      setSession({type: actionType.LOADING}),
    success: (user, token) =>
      setSession({type: actionType.LOGIN_SUCCESS, payload:{user, token}}),
    fail: () =>
      setSession({type: actionType.LOGIN_FAILED}),
  }

  return {session, dispatch}
}
