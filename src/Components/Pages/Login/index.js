import React from 'react'
import './index.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import connect from '../../../Modules/connect'
const FormItem = Form.Item;
class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    console.log(this.props)
    let username = this.props.form.getFieldValue('userName')
    let password = this.props.form.getFieldValue('password')
    let success = () => {
      this.props.history.replace('/')
    }
    this.props.login(username, password, success)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={ "app-login" }>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default connect(Form.create()(Login),'login');