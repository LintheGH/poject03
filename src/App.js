import React, { Component } from 'react';
import './App.css';
import connect from './Modules/connect'
import { withRouter } from 'react-router-dom'
class App extends Component {
  checkLogin () { // 非登录页面验证登录状态
    if (this.props.location.pathname !== '/login') {
      if (!this.props.commons.user_state) {
        this.props.history.replace('/login')
      }
    }
  }
  componentDidMount () {
    // this.checkLogin()
  }
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default withRouter(connect(App));
