import { request } from '@/utils/request'

// 获取首页数据
export const getHomeData = (params) => {
  return request({
    url: '/api/index',
    params
  })
}
