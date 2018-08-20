import React from 'react'
import { Modal, Button } from 'antd';
import Form from './form'
class Open extends React.Component {
  submit = () => {
    console.log('submit')
  }
  render() {
    return (
      <div>
        <Modal
          title="Modal"
          visible={this.props.visible}
          onOk={this.props.hideModal}
          onCancel={this.props.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <Form />
        </Modal>
      </div>
    );
  }
}
export default Open