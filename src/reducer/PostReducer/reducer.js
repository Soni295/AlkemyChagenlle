export const initState = {
  posts: [],
  loading: false
}

export const actionType = {
  LOADING: 'LOADING',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_fail: 'GET_POSTS_fail',
  GET_POST_ID_SUCCESS: 'GET_POST_ID_SUCCESS',
  GET_POST_ID_fail: 'GET_POST_ID_fail',
}

export const reducer = (state, action) => {
  switch(action.type){
    case actionType.LOADING:
      return {
        ...state,
        loading: true
      }

    case actionType.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        loading: false
      }

    default:
      console.log('fail')
      return {...state}
  }
}
