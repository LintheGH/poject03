import React from 'react'
import './index.scss'
import { Layout } from 'antd';
const { Content } = Layout;
class _Content extends React.Component {

  render () {
    return (
      <div className="home-content">
        <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
          Content
        </Content>
      </div>
    )
  }
}
export default _Content