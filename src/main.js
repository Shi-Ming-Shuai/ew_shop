import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem适配
import 'lib-flexible/flexible'

// vant
import { Button, Tabbar, TabbarItem, Icon } from 'vant'

const app = createApp(App)

// vant 按需加载
app.use(Button).use(Tabbar).use(TabbarItem).use(Icon)
// .mount('#app') 写在最后 要不然 不能再 App.vue组件中 使用 vant (TabBar)
app.use(store).use(router).mount('#app')
