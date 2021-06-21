import { BrowserRouter, Switch } from 'react-router-dom'
import { allRouters, Route } from './config/allRouters'
import { Navbar } from './components/NavBar/index'
import { UserProvider } from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar/>
        <Switch>
          {allRouters.map(route => <Route {...route}/>)}
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}
