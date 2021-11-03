import { request } from '@/utils/request'

// 获取商品列表 （分类 排序方式）
export const getCategoryGoods = params => {
  return request({
    url: '/api/goods',
    params
  })
}
