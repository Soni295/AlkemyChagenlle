import { Form, Button } from 'react-bootstrap'
import { Input } from '../FormInput/index'
import { inputs } from './inputs'
import './style.css'

export const LoginForm = () => {

  return(
    <main id='bg-login'>
      <div className='login-box'>
        <h2>Login Form</h2>

        <Form onSubmit={() => console.log('hola')}>
          {inputs.map(input =>
            <Input {...input} key={input.name}/>
          )}

          <Button variant='primary' type='submit'>
            Send
          </Button>
        </Form>
      </div>
    </main>
  )
}
