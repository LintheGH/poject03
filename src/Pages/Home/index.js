import React from 'react'
import './index.scss'
import { Layout } from 'antd';
import connect from '../../Modules/connect'
import Header from './Components/Header'
import LeftNav from './Components/LeftNav'
import Breadcrumb from './Components/Breadcrumb'
const { Content } = Layout;
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      header: [],
      settingMenu: [
        { "id": 1, "title": "个人设置", icontype: "setting" },
        { "id": 2, "title": "提醒信息", icontype: "notification" },
        { "id": 3, "title": "退出登录", icontype: "export" }
      ],
      sideMenu: [],
      currentSideMenu: []
    }
    this.changeSideNav = this.changeSideNav.bind(this)
  }
  
  getHeader () {
    let username = this.props.commons.user_state ? this.props.commons.user_state.username : ''
    let level = this.props.commons.user_state ? this.props.commons.user_state.level : ''
    this.$http.ajax({
      method: 'GET',
      url: './Api/header.json'
    }).then(res => {
      this.setState({
        header: res.data.data.header
      })
    })
  }

  getSideMenu () {
    let username = this.props.commons.user_state ? this.props.commons.user_state.username : ''
    let level = this.props.commons.user_state ? this.props.commons.user_state.level : ''
    this.$http.ajax({
      method: 'GET',
      url: './Api/sideMenu.json'
    }).then(res => {
      this.setState({
        sideMenu: res.data.data.sideMenu,
        currentSideMenu: res.data.data.sideMenu[0].children
      })
    })
  }

  changeSideNav (e) {
    let value = e.item.props.children
    let target = this.state.sideMenu.filter(item => item.title === value)[0].children
    this.setState({
      currentSideMenu: target
    })
  }

  componentWillMount () {
    this.getHeader()
    this.getSideMenu()
  }

  render () {
    let { header,settingMenu } = this.state
    return (
      <div className="app-home">
        <Layout>
          <Header header={ header } settingMenu={ settingMenu } changeSideNav={ this.changeSideNav }/>
          <Layout>
            <LeftNav currentSideMenu={ this.state.currentSideMenu }/>
            <Layout className="content-box" style={{ padding: '0 15px 15px' }}>
              <Breadcrumb />
              <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
                { this.props.children }
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default connect(Home)