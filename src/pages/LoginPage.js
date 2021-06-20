import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { LoginForm } from '../components/LoginForm/index'
import { PATH } from '../config/PATH'

export const LoginPage = () => {
  const {session} = useContext(UserContext)

  if(session.token)
    return <Redirect to={PATH.LoginPage.path} />

  return <LoginForm />
}
