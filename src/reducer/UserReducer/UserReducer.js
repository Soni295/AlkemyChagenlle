import { useReducer } from 'react'
import { initState, actionType, reducer } from './reducer'

export const UserReducer = () => {
  const [session, setSession] = useReducer(reducer, initState)

  const dispatch = {
    loading: () => setSession({type: actionType.LOADING}),
    success: () => setSession({type: actionType.LOGIN_SUCCESS}),
    fail: () => setSession({type: actionType.LOGIN_FAILED}),
  }

  return {session, dispatch}
}
