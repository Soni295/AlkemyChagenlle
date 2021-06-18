import { BrowserRouter, Switch } from 'react-router-dom'
import { allRouters, Route } from './config/allRouters'
import { Container } from 'react-bootstrap'
import { Navbar } from './components/NavBar/index'
import { UserReducer } from './reducer/UserReducer/UserReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const App = () => {
 const {session, dispatch} = UserReducer()

  return (
    <BrowserRouter>
      { session.user && <Navbar/> }
      <Switch>
        <Container fluid>
          {allRouters.map(route => <Route {...route}/>)}
        </Container>
      </Switch>
    </BrowserRouter>
  )
}
