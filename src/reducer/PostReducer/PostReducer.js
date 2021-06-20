import { useReducer } from 'react'
import { initState, actionType, reducer } from './reducer'

export const PostReducer = () => {
  const [postsState, setPosts] = useReducer(reducer, initState)

  const dispatch = {
    loading: () =>
      setPosts({type: actionType.LOADING}),
    getPostsSucess: posts =>
      setPosts({type: actionType.GET_POSTS_SUCCESS, payload: {posts}})
  }

  return {postsState, dispatch}
}
