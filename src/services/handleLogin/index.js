import { useFormik } from 'formik'
import { LoginApi } from '../../config/Apis'
import { validate, initialValues, typeOfMsg } from './validate'

export const HandleLogin = () => {

  const onSubmit = values => {
    console.log('hola')
    LoginApi
      .post('', values)
      .then(res => res.data.token)
      .then(token => console.log(token))
      .catch( err => {
        const msg = typeOfMsg[err.message] || 'Error'
        alert(msg)
      })
      .then(() => alert('hola'))
  }

  const formik = useFormik({initialValues, onSubmit, validate})

  return {formik}
}
