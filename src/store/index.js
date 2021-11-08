import { createStore } from 'vuex'
import { getItem } from '@/utils/storage'
const isToken = getItem('token')
export default createStore({
  state: {
    isLogin: isToken ? true : null // 登录状态
  },
  mutations: {
    // 用户登录
    changeLogin(state, status) {
      state.isLogin = status
      console.log(state.isLogin)
    }
  },
  actions: {
  },
  modules: {
  }
})
