import { request } from '@/utils/request'

// 用户注册
export const userReg = data => {
  return request({
    url: '/api/auth/register',
    method: 'post',
    data
  })
}

// 用户登录
export const userLogin = data => {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}
