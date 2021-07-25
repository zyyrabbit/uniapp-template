import api from './index'

export const login = async (params: object) => {
  return await api.request({
    url: `/user/login`,
    method: 'POST',
    data: params
  })
}