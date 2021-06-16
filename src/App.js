import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { allRouters, Route } from './config/allRouters'

export const App = () => {
  return (
    <Router>
      <Switch>

        {allRouters.map(route => <Route {...route} />)}

      </Switch>
    </Router>
  )
}
