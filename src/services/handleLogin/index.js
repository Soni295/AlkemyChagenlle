import { useContext } from 'react'
import { useFormik } from 'formik'

import { validate, initialValues, typeOfMsg } from './validate'

import { UserContext } from '../../context/UserContext'
import { LoginApi } from '../../config/Apis'

export const HandleLogin = () => {
  const {session, dispatch} = useContext(UserContext)

  const onSubmit = values => {
    console.log(values)
    LoginApi
      .post('', values)
      .then(res => res.data.token)
      .then(token => dispatch.success(values.email, token))
      .catch( err => {
        const msg = typeOfMsg[err.message] || 'Error'
        dispatch.fail()
        alert(msg)
      })
      console.log(session)
  }

  const formik = useFormik({initialValues, onSubmit, validate})

  return {formik}
}
