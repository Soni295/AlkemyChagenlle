import { Route as ReactRoute, Redirect } from 'react-router-dom'
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


export const Route = ({path, exact, Component, autho})=> {

  const token = localStorage.getItem('token')

  if(autho && !token)
    return <Redirect to={PATH.LoginPage.path} />

  if(token && path === PATH.LoginPage.path)
    return <Redirect to={PATH.Home.path} />

  return (
    <ReactRoute
      path={path}
      key={path}
      exact={exact}
      component={Component}
    />
  )
}
