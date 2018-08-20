import React from 'react'
import './index.scss'
import { Breadcrumb } from 'antd';
class _Breadcrumb extends React.Component {

  render () {
    return (
      <div className="home-breadcrumb">
        <Breadcrumb style={{ margin: '6px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default _Breadcrumb