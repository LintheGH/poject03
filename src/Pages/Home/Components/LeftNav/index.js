import React from 'react'
import './index.scss'
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;
class LeftNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openkey: ''
    }
    this.changeOpenSubMenu = this.changeOpenSubMenu.bind(this)
  }
  changeOpenSubMenu (e) {
    this.setState({
      openkey: e.key
    })
  }
  changePath (path) {
    this.props.history.replace(path)
  }
  renderSideNav () {
    if (!this.props.currentSideMenu.length) {
      return
    }
    let sideMenu = []
    let currentSideMenu = this.props.currentSideMenu
    let pushItem = ''
    for (let i = 0; i < currentSideMenu.length; i++) {
      if (currentSideMenu[i].children.length) {
        pushItem = (
          <SubMenu key={ 'sub' + currentSideMenu[i].id } onTitleClick={ this.changeOpenSubMenu } title={<span><Icon type={ currentSideMenu[i].icontype } />{ currentSideMenu[i].title }</span>}>
            { this.props.currentSideMenu[i].children.map((content) => {
              return (
                <Menu.Item onClick={ this.changePath.bind(this, content.path) } key={ 'item' + content.id }><span><Icon type={ content.icontype } />{ content.title }</span></Menu.Item>
              )
            }) }
          </SubMenu>
        )
      } else {
        pushItem = (
          <Menu.Item onClick={ this.changePath.bind(this, currentSideMenu[i].path) } key={ currentSideMenu[i].id }><span><Icon type={ currentSideMenu[i].icontype } />{ currentSideMenu[i].title }</span></Menu.Item>
        )
      }
      sideMenu.push(pushItem)
    }
    return sideMenu
  }
  render () {
    return (
      <div className="home-leftnav">
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            openKeys={ [this.state.openkey] }
          >
            { this.renderSideNav() }
          </Menu>
        </Sider>
      </div>
    )
  }
}
export default withRouter(LeftNav)