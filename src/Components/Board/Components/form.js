import React from 'react'
import { Input, Select, DatePicker } from 'antd'
import './form.scss'
const { Option, OptGroup } = Select
const { TextArea } = Input
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class Form extends React.Component {
  submit = () => {
    alert('submit')
  }
  selectType = () => {
    console.log('selectType')
  }
  selectRecive = (value) => {
    console.log(`selected ${value}`);
  }
  selectSend = (value) => {
    console.log(`selected ${value}`);
  }
  pickDate = (value) => {
    console.log(value)
  }
  render () {
    return (
      <div className="form">
        <form onSubmit={ this.submit }>
          <div className={ "input-wrap" }>
            <label>标题</label><Input placeholder="Basic usage" />
          </div>
          <div className={ "input-wrap" }>
            <label>类型名称</label>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.selectSend}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className={ "input-wrap" }>
            <label>发送给</label>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={this.selectRecive}
            >
              {children}
            </Select>
          </div>
          <div className={ "input-wrap" }>
            <label>内容</label><TextArea rows={4} />
          </div>
          <div className={ "input-wrap" }>
            <label>来源</label>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.selectSend}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className={ "input-wrap" }>
            <label>时间</label><DatePicker onChange={this.pickDate} />
          </div>
        </form>
      </div>
    )
  }
}
export default Form