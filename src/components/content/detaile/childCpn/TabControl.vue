<template>
  <div class="TabControl">
    <van-tabs v-model:active="active">
      <van-tab title="概述">
        <div class="desc"></div>
      </van-tab>
      <van-tab title="热评">内容 2</van-tab>
      <van-tab title="相关图书">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TabControl',
  props: {
    // 概述(详情)
    details: {
      type: String,
      default: '此商品无详情'
    },
    // 评论
    comments: {
      type: Array,
      default() {
        return []
      }
    },
    // 相关图书
    likeGoods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<style scoped lang="less"></style>
