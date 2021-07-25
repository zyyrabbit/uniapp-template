//uni-app内置有区别环境的不同，可以直接通过process.env.NODE_ENV获取
//！！！注意，这里的接口当然是不能访问的，正式的api接口是商业保密的，后期抽时间用node来补上吧。项目无法正常接口请求，请谅解。但是跟着我的思路，把一个项目跑起来是没有任何问题的。
let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = '192.168.1.1:8090' // qe环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	baseUrl: BASE_URL,
	appKey: '675aeecfdac05b6b82b9910a8fd00e88',
	header: {
		'content-type': 'application/json',
		'appId':'wxeb407bb6c397aa4c',
		'token': uni.getStorageSync('AuthTokens')
	}
}

export { config }