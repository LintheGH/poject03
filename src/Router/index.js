import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Board from '../Components/Board'
import Email from '../Components/Email'
import Attend from '../Components/Attend'
class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/" render={ function ({location}) {
              return (
                <Home>
                  <Switch>
                    <Route exact={ true } path = "/" component = { Board } />
                    <Route path = "/board" component = { Board } />
                    <Route path = "/emails" component = { Email } />
                    <Route path = "/attend" component = { Attend } />
                  </Switch>
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