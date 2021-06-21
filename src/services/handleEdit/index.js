import { useFormik } from 'formik'
import { EditReducer } from '../../reducer/EditReducer/EditReducer'
import { JPHApi } from '../../config/Apis'
import { validate } from './validate'

export const HandleEdit = () => {
  const {editPost, setEditPost} = EditReducer()
  const initialValues = editPost.data
  const onSubmit = values => {
    JPHApi
      .put('id', values)
      .then(res => console.log(res))
  }

  const formik = useFormik({initialValues, onSubmit, validate})

  return {formik, editPost, setEditPost}
}
