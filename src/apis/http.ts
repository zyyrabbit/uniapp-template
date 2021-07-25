
export type Index = { [index: string]: string }

export type ApiConfig = {
	baseUrl: string
	header?: Index
	appKey: string
}

export type reqParams = {
	url: string
	data: any
  header?: Index
	method: string
}


export default class HTTP {
  config: ApiConfig
  baseUrl: string
  header: Index
  interceptors = {
    success: (res: any) => {},
    fail: (err: any) => {}
  }

  constructor(config: ApiConfig) {
    this.config = config
    this.header = this.config.header || {}
    this.baseUrl = config.baseUrl
  }

  request({
    url,
    data = {},
    method = 'GET',
    header
  }: reqParams) {
    return new Promise((resolve, reject) => {
      this._request(
        url, 
        resolve,
        reject, 
        data, 
        method, 
        header
      )
    }).then(
      (res) => this.interceptors.success(res),
      (err) => this.interceptors.fail(err)
    )
  }

  _request(
    url: string, 
    resolve: Function, 
    reject: Function, 
    data = {}, 
    method: any = 'GET',
    header: any
   ) {
    uni.request({
      url: `${this.baseUrl}${url}`,
      method: method,
      data: data,
      header: header || this.header,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  }
}

