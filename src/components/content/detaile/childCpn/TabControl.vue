<template>
  <div class="TabControl">
    <van-tabs v-model:active="active">
      <van-tab title="概述">
        <div class="desc" v-html="details"></div>
      </van-tab>
      <van-tab title="热评">
        <van-cell-group title="商品评论">
          <van-cell
            v-for="(item, i) in comments"
            :key="i"
            :value="item.content"
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="相关图书">
        <GoodsList :goodsLists="likeGoods" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
// 组件
import GoodsList from '@/components/content/goods/GoodsList'
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
  components: { GoodsList },
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<style scoped lang="less">
/deep/.desc {
  img {
    max-width: 100% !important;
    // img标签实现background-size:cover（图片拉伸、缩放）等效果
    object-fit: cover;
  }
}
</style>
