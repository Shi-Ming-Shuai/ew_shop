import { request } from '@/utils/request'

// 获取商品详情 （分类 排序方式）
export const getDetaile = goodsId => {
  return request({
    url: `/api/goods/${goodsId}`
  })
}
