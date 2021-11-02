<template>
  <div class="Banner">
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.img_url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Banner',
  props: {
    bannerList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="less"></style>
