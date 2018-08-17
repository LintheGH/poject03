import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../Store/actionCreator'
// connect(UIcomponent, 'todolist', { reducer: 'abc', state: 'userinfo' })
const _connect = function (UIcomponent, ...option) {
  let mapStateToProps = function (state) {
    if (!option.length) { // 如果什么都没传，option 为空数组，返回所有state
      return state
    }
    let _state = {}
    option.map((item) => { 
      if((typeof item) === 'string') { // 如果传入一个字符串，则表示 action 
        if (state[item]) {// 如果这个 action 对应的 state 存在的话返回
          _state = state[item]
        } else {
          _state = state // 没有则返回全部
        }
        if ((typeof item) === 'object') { // 如果传入对象，规定形状 { action: 'actionname', state: 'statename' }
          if (Object.keys(item).join(',') === 'action,state') {
            if (state[item.state]) {// 如果存在state中
              _state = state[item.state]
            }
          }
        }
      }
    })
    return _state
  }
  let mapDispatchToProps = function (dispatch) {
    if (!option.length) {// 如果没传，返回空对象
      return {}
    }
    let action = {}
    option.map((item) => {
      if ((typeof item) === 'string') {
        console.log(item)
        if (actionCreator[item]) {
          action[item] = bindActionCreators(actionCreator[item], dispatch) // bindActionCreators 返回值是一个函数，这个函数dispatch 里面的 action 
        }
      }
      if ((typeof item) === 'object') {
        if (Object.keys(item).join(',') === 'action,state') {
          if (actionCreator[item.action]) {
            action[item.action] = bindActionCreators(actionCreator[item.action], dispatch)
          }
        }
      }
    })
    return action
  }
  return connect(mapStateToProps, mapDispatchToProps)(UIcomponent)
}
export default _connect