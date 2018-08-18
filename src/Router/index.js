import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Pages/Home'
import Login from '../Components/Pages/Login'
class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route exact={ true } path="/" render={ function ({location}) {
              return (
                <Home>
                  
                </Home>
              )
            } }/>
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}
export default Router