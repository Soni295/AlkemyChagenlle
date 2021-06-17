import { Route as ReactRoute } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { UpdatePage } from '../pages/UpdatePage'
import { PATH } from './PATH'

class RouteObj {
  constructor(path, Component, autho=true, exact=true){
    this.path = path.path
    this.key = path.path
    this.Component = Component
    this.autho = autho
    this.exact = exact
  }
}

export const allRouters = [
  new RouteObj(PATH.Home, HomePage),
  new RouteObj(PATH.UpdatePage, UpdatePage),
  new RouteObj(PATH.LoginPage, LoginPage, false),
]


/*
export const Route = ({path, exact, Component})=> {
  console.log(path)
  return (
    <ReactRoute
      path={path}
      key={path}
      exact={exact}
      render={ props => <Component {...props} /> }
    />
  )
}
 borrar
*/
export const Route = route => {
  return (
    <ReactRoute
      path={route.path}
      key={route.path}
      exact={route.exact}
      render={
        props => <route.Component {...props} />
      }
    />
  )
}

