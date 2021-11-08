import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem适配
import 'lib-flexible/flexible'

// vant
import { Stepper, SubmitBar, Form, Checkbox, CheckboxGroup, Field, Sidebar, Cell, CellGroup, Tag, Card, SidebarItem, Collapse, CollapseItem, List, Badge, Lazyload, Tab, Tabs, Button, Tabbar, TabbarItem, Icon, NavBar, Swipe, SwipeItem } from 'vant'

const app = createApp(App)

// vant 按需加载
app.use(Button).use(Tabbar).use(TabbarItem).use(Icon).use(NavBar)
  .use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(List)
  .use(Lazyload, { loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzhengyongshun.com%2Fwp-content%2Fuploads%2F2017%2F02%2Ftimg-1.gif&refer=http%3A%2F%2Fzhengyongshun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638513121&t=075b0f7cb9eed725888eea7b0ad7f689' })
  .use(Badge).use(Collapse).use(CollapseItem)
  .use(Sidebar).use(SidebarItem).use(Card).use(Tag)
  .use(Cell).use(CellGroup).use(Form).use(Field).use(Checkbox)
  .use(CheckboxGroup).use(Stepper).use(SubmitBar)
// .mount('#app') 写在最后 要不然 不能再 App.vue组件中 使用 vant (TabBar)
app.use(store).use(router).mount('#app')
