import { config } from './config'
import Http from './http'

const showError = (errorCode: string, message?: string) => {
  uni.showToast({
    title: `${message}`,
    icon: 'none',
    duration: 2000
  })
}


const instance = new Http(config)

instance.interceptors.success = (res) => {
  if (res.data) {
    const success = res.data.success;
    if (success) {
      return Promise.resolve(res.data)
    } else {
      const errorCode = res.data.code;
      const message = res.data.message;
      showError(errorCode, message)
      return Promise.reject(res.data.message)
    }
  } else {
    Promise.reject(res.data)
  }
}

instance.interceptors.fail = (err) => {
  return Promise.reject(err.retMsg);
}

export default instance