<template>
  <div class="GoodsListItem">
    <van-card
      tag="流行"
      :price="goodsItem.price"
      desc="描述信息"
      :title="goodsItem.title"
      :thumb="goodsItem.cover_url"
      origin-price="100.00"
    />
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  setup() {}
}
</script>

<style scoped lang="less">
.van-card {
  margin-top: 10px;
}
</style>
