import axios from 'axios'
const http = {
  ajax (option) {
    return new Promise ((resolve, reject) => {
      axios({
        method: option.method || 'GET',
        url: option.url,
        params: option.params || {}
      }).then((res) => {
        console.log('succ')
        if (res.data.code === 200) {
          resolve(res)
        } else {
          console.log('err')
          let code = res.data.code
          let message = this.judge(code)
          reject(message)
        }
      })
    })
  },
  judge (code) {
    let message = ''
    switch (code) {
      case 400:
        message = '错误请求'
        break;
      case 401:
        message = '未授权，请重新登录'
        break;
      case 403:
        message = '拒绝访问'
        break;
      case 404:
        message = '请求错误,未找到该资源'
        break;
      case 405:
        message = '请求方法未允许'
        break;
      case 408:
        message = '请求超时'
        break;
      case 500:
        message = '服务器端出错'
        break;
      case 501:
        message = '网络未实现'
        break;
      case 502:
        message = '网络错误'
        break;
      case 503:
        message = '服务不可用'
        break;
      case 504:
        message = '网络超时'
        break;
      case 505:
        message = 'http版本不支持该请求'
        break;
      default:
        message = `连接错误${code}`
        break
    }
    return message
  }
}
export default http