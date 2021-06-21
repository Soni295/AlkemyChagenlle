export const initState = {
  show: false,
  data : {
    id: '1',
    userId: '03',
    title: 'Hello world',
    body: 'mmmmm',
  },
  loading: false
}

export const actionType = {
  LOADING: 'LOADING',
  CLOSE_MODAL : 'CLOSE_MODAL',
  GET_POST_ID_SUCCESS: 'GET_POST_ID_SUCCESS',
  GET_POST_ID_FAIL: 'GET_POST_ID_FAIL',
}

export const reducer = (state, action) => {
  switch(action.type){
    case actionType.LOADING:
      return {
        ...state,
        loading: true
      }
    case actionType.GET_POST_ID_SUCCESS:
      const {id, userId, body, title} = action.payload
      return {
        ...state,
        data: {id, userId, body, title},
        loading: false,
        show: true
      }

    case actionType.CLOSE_MODAL:
      return { ...state, show: false }

    default:
      console.log('fail', action.type)
      return {...state}
  }
}
