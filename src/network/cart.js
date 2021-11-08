import { request } from '@/utils/request'

// 添加购物车
export const addCart = (goodsId, num = 1) => {
  return request({
    url: '/api/carts',
    method: 'post',
    data: {
      goods_id: goodsId,
      num
    }
  })
}
// 购物车列表
export const cartList = (include = 'goods') => {
  return request({
    url: '/api/carts',
    params: {
      include
    }
  })
}
// 购物车改变选中
export const chengChecked = ary => {
  return request({
    url: '/api/carts/checked',
    method: 'PATCH',
    data: {
      cart_ids: ary
    }
  })
}
