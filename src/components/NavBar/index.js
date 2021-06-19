import { useContext } from 'react'
import { Navbar as NavbarBs } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'
import { Link } from '../Link/index'
import { PATH } from '../../config/PATH'


export const Navbar = () => {
  const {session} = useContext(UserContext)

  if(!session.token) return <></>

  return(
    <NavbarBs className='navbar-dark' bg='dark' expand='lg'>
      <Link page={PATH.LoginPage}/>
    </NavbarBs>
  )
}
