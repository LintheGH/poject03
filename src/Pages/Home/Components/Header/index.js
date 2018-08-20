import React from 'react'
import './index.scss'
import { Layout, Menu, Icon, Dropdown } from 'antd';
import connect from '../../../../Modules/connect'
const { Header } = Layout;
class _Header extends React.Component {
  render () {
    const menu = (
      <Menu>
        { this.props.settingMenu.map((item, i) => {
          return (<Menu.Item key={ i+1 }>
            <a href= "javascript:" style={{ padding: "10px 20px" }}><span><Icon type={ item.icontype } style={{ padding: "0 10px 0 0 " }}/>{ item.title }</span></a>
          </Menu.Item>)
        }) }
      </Menu>
    )
    return (
      <div className="home-head">
        <Header
            className="header"
            style={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}
          >
            <div className="logo">
              logo
            </div>
            <div className="header-right-wrap">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '40px' }}
              >
              { this.props.header.map((item, i) => {
                return (<Menu.Item key={ i+1 } onClick={ this.props.changeSideNav }>{ item.title }</Menu.Item>)
              }) }
              </Menu>
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                  { this.props.commons.user_state ? this.props.commons.user_state.username : '' } <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </Header>
      </div>
    )
  }
}
export default connect(_Header)