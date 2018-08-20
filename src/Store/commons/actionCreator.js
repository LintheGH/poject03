import {
  CHANGE_USERSTATE
} from './const'
import http from '../../Modules/http'
const actionCreator = {
  login (username, password, success, faile) {
    return function (dispatch) {
      http.ajax({
        method: 'GET',
        url: '../../Api/userdata.json'
      }).then((res) => {
        if (res.data.code === 200) {
          let action = {
            type: CHANGE_USERSTATE,
            user_state: {
              ...res.data.data.userinfo,
              token: res.data.token
            }
          }
          dispatch(action)
          success()
        } else {
          faile()
        }
      }).catch((err) => {

      })
    }
  },

}
export default actionCreator