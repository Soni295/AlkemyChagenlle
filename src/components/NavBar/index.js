import { Link } from '../Link/index'
import { Navbar as NavbarBs } from 'react-bootstrap'
import { PATH } from '../../config/PATH'

export const Navbar = () => {
  return(
    <NavbarBs className='navbar-dark' bg='dark' expand='lg'>
      <Link page={PATH.LoginPage}/>
    </NavbarBs>
  )
}
