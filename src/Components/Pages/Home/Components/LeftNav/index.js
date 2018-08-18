import React from 'react'
import './index.scss'
import { Layout, Menu, Icon } from 'antd';
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
  renderSideNav () {
    if (!this.props.currentSideMenu.length) {
      return
    }
    return (
      this.props.currentSideMenu.map((item, i) => {
        return (
          <SubMenu key={ 'sub' + item.id } onTitleClick={ this.changeOpenSubMenu } title={<span><Icon type={ item.icontype } />{ item.title }</span>}>
            { this.props.currentSideMenu[i].children.map((content) => {
              return (
                <Menu.Item key={ content.id }>{ content.title }</Menu.Item>
              )
            }) }
        </SubMenu>
        )
      })
    )
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
export default LeftNav