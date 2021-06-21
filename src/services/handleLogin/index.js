import { useContext } from 'react'
import { useFormik } from 'formik'

import { validate, initialValues, typeOfMsg } from './validate'

import { UserContext } from '../../context/UserContext'
import { LoginApi } from '../../config/Apis'
import { useModal } from '../../hooks/useModal'

export const HandleLogin = () => {
  const {dispatch} = useContext(UserContext)
  const { modal, setModal} = useModal('Login Error')

  const onSubmit = values => {
    console.log(modal)
    LoginApi
      .post('', values)
      .then(res => res.data.token)
      .then(token => dispatch.success(values.email, token))
      .catch( err => {
        const msg = typeOfMsg[err.message] || 'Error'
        setModal.setMsg(msg)
        setModal.show()
        dispatch.fail()
      })
  }

  const formik = useFormik({initialValues, onSubmit, validate})

  return {formik, modal, setModal}
}
