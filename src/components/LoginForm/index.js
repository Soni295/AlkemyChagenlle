import { Form, Button } from 'react-bootstrap'
import { Input } from '../FormInput/index'
import { HandleLogin } from '../../services/handleLogin/index'
import { inputs } from './inputs'

import { AlertModal } from '../Modal/AlertModal/index'

import './style.css'

export const LoginForm = () => {
  const {formik, modal, setModal} = HandleLogin()
  return(
    <main id='bg-login'>
      <div className='login-box'>
        <h2>Login Form</h2>

        <Form onSubmit={formik.handleSubmit}>

          {inputs.map(input =>
            <Input {...input} key={input.name} control={formik}/>
          )}

          <Button variant='primary' type='submit'>
            Send
          </Button>

        </Form>

      </div>
      <AlertModal
        modal={modal}
        setModal={setModal}
      />
    </main>
  )
}
