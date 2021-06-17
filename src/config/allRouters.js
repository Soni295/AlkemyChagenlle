import { Route as ReactRoute } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { UpdatePage } from '../pages/UpdatePage'
import { PATH } from './PATH'

class RouteObj {
  constructor(path, Component, autho=true, exact=true){
    this.path = path.path
    this.key = path.name
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

export const Route = route => {
  return (
    <ReactRoute
      path={route.path}
      key={route.key}
      exact={route.exact}
      render={
        props => <route.Component {...props} />
      }
    />
  )
}
