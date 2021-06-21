import { useEffect } from 'react'
import { PostReducer } from '../../reducer/PostReducer/PostReducer'
import { useModal } from '../../hooks/useModal'
import { HandleEdit } from '../../services/handleEdit/index'

import { JPHApi } from '../../config/Apis'

export const useLogic = () => {
  const {postsState, dispatch} = PostReducer()
  const {modal, setModal} = useModal('Error Loading posts')
  const {formik, editPost, setEditPost} = HandleEdit()

  useEffect(() => {
    dispatch.loading()
    JPHApi.get('')
      .then(res => dispatch.getPostsSucess(res.data))
      .catch(err => {
        const msg = 'Error connection'
        setEditPost.setMsg(msg)
        setEditPost.show()
      })
  }, [])
  return{modal, setModal, posts: postsState.posts, editPost, setEditPost,
    formik}
}
