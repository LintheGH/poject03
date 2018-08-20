import React from 'react'
import './index.scss'
import connect from '../../Modules/connect'
import { Menu, Dropdown, Table, Icon, Button, Radio, Input } from 'antd'
const menu = (
  <Menu onClick={(params) => {
    console.log(params)
    if (params.key === '2') {
      operate.remove()
      
    }
  }}>
    <Menu.Item key="0">
      <a href="javascript:">详情</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="javascript:">编辑</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="javascript:" style={{ color: 'red' }}>删除</a>
    </Menu.Item>
  </Menu>
)
const columns = [{
  title: '',
  dataIndex: 'key'
}, {
  title: '标题',
  dataIndex: 'title',
  sorter: (a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)
}, {
  title: '类型名称',
  dataIndex: 'type',
  filters: [{
    text: '通知公告',
    value: '通知公告',
  }, {
    text: '规章制度',
    value: '规章制度',
  }, {
    text: '知识信息',
    value: '知识信息',
  }, {
    text: '奖惩',
    value: '奖惩',
  }],
  onFilter: (value, record) => record.type.indexOf(value) === 0,
}, {
  title: '发送给',
  dataIndex: 'receive',
  filters: [{
    text: '开发部',
    value: '开发部',
  }, {
    text: '总经部',
    value: '总经部',
  }, {
    text: '人事部',
    value: '人事部',
  }, {
    text: '销售部',
    value: '销售部',
  }],
  onFilter: (value, record) => record.receive.indexOf(value) === 0,
  sorter: (a, b) => a.receive.length - b.receive.length,
}, {
  title: '来源',
  dataIndex: 'send',
  filters: [{
    text: '开发部',
    value: '开发部',
  }, {
    text: '总经部',
    value: '总经部',
  }, {
    text: '人事部',
    value: '人事部',
  }, {
    text: '销售部',
    value: '销售部',
  }],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.send.indexOf(value) === 0,
  sorter: (a, b) => a.send.length - b.send.length
}, {
  title: '日期',
  dataIndex: 'date'
}, {
  title: '操作',
  dataIndex: 'action',
  render: (text, record) => (
    <span>
      <Dropdown onClick={ action } overlay={menu} trigger={['click']}>
        <a ref={el => this.el = el} className="ant-dropdown-link" href="javascript:">
          Click me <Icon type="down" />
        </a>
      </Dropdown>
    </span>
  )
}]
const Search = Input.Search;
function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
var operate = ''
function action (e) {
  operate = e.target.parentNode.parentNode.parentNode
}

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: '',
      isReaded: 'isReaded',
      data: []
    }
    this.rowClassName = this.rowClassName.bind(this)
  }
  
  getData () {
    this.$http.ajax({
      method: 'GET',
      url: './Api/board.json'
    }).then((res) => {
      console.log(res)
      this.setState({
        data: res.data.data
      })
    })
  }
  rowClassName (record) {
    if (record.isreaded === this.state.isReaded) {
      return 'readed'
    }
  }
  componentWillMount () {
    this.getData()
    console.log(this.state,333)
  }
  handleFilter = (e) => {
    this.setState({ fliter: e.target.value });
  }
  render () {
    const filter = this.state.filter;
    return (
      <div className="home-board" style={{ height: 40 }}>
          <div className="button-wrap">
            <Button type="primary" size={ "default" }>新增 +</Button>
            <Search
              placeholder="搜索"
              enterButton="Search"
              size="default"
              style={{ width: 200, marginLeft: 25}}
              onSearch={value => console.log(value)}
            />
            <Radio.Group style={{ marginLeft: 25 }} value={filter} onChange={this.handleFilter}>
              <Radio.Button value="my">与我相关</Radio.Button>
              <Radio.Button value="mysend">我发布的</Radio.Button>
              <Radio.Button value="read">我未读</Radio.Button>
            </Radio.Group>
          </div>
          <Table rowClassName={ this.rowClassName } bordered columns={columns} dataSource={this.state.data} onChange={onChange} />
      </div>
    )
  }
}
export default connect(Board)