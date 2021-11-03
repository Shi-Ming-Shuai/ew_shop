<template>
  <div class="Menu">
    <!-- 一级菜单 -->
    <van-collapse v-model="oneIndex" accordion>
      <van-collapse-item
        v-for="(item, i) in categoryList"
        :title="item.name"
        :key="item.id"
        :name="i"
      >
        <!-- 二级菜单 -->
        <van-sidebar v-model="twoIndex">
          <van-sidebar-item
            v-for="item2 in item.children"
            :key="item2.id"
            :title="item2.name"
          />
        </van-sidebar>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Menu',
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  setup() {
    // 一级菜单  二级菜单
    const oneIndex = ref(0)
    const twoIndex = ref(0)
    return { oneIndex, twoIndex }
  }
}
</script>

<style scoped lang="less">
.Menu {
  overflow-y: auto;
}
/deep/.van-collapse-item__content {
  padding: 0;
}
.van-sidebar {
  width: 100%;
}
</style>
