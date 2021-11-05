// 获取用户token   用户设置 axios 请求头携带

import { getItem } from '@/utils/storage'

export const getToken = () => {
  const token = getItem('token')
  // 判断token 是否存在
  return token
}
