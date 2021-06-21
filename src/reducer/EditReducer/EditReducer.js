import { useReducer } from 'react'
import { initState, actionType, reducer } from './reducer'

export const EditReducer = () => {
  const [editPost, dispatch] = useReducer(reducer, initState)

  const setEditPost = {
    loading: () =>
      dispatch({type: actionType.LOADING}),
    success: ({id, userId, body, title}) =>
      dispatch({
        type: actionType.GET_POST_ID_SUCCESS,
        payload: {id, userId, body, title}}
      ),
      close: () =>
        dispatch({type: actionType.CLOSE_MODAL})
  }
  return {editPost, setEditPost}
}
