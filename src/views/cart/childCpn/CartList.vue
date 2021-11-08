<template>
  <div class="CartList">
    <van-checkbox-group
      @change="changeCheck"
      v-model="checked"
      ref="checkboxGroup"
    >
      <van-card
        v-for="item in goodsList"
        :key="item.goods_id"
        :thumb="item.goods.cover_url"
      >
        <template #title>
          <span>{{ item.goods.title }}</span>
          <i class="num">x{{ item.num }}</i>
        </template>
        <template #price>
          <span class="price"> ￥{{ item.goods.price.toFixed(2) }}</span>
          <van-stepper
            class="stepper"
            v-model="item.num"
            :max="item.goods.stock"
            disable-input
          />
        </template>
        <template #footer>
          <!-- 商品复选框 -->
          <van-checkbox class="checkbox" :name="item.goods_id"></van-checkbox>
        </template>
      </van-card>
    </van-checkbox-group>
    <!-- 提交订单 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkedAll" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue'
// 请求
import { chengChecked, cartList } from '@/network/cart'
export default {
  name: 'CartList',
  props: {},
  components: {},
  setup() {
    // 商品复选框
    const checkedAll = ref(false)
    const checkboxGroup = ref(null)
    // 商品信息数据
    const state = reactive({
      goodsList: [],
      checked: []
    })
    onMounted(() => {
      cartListData()
    })

    // 请求
    const cartListData = async () => {
      const res = await cartList()
      state.goodsList = res.data
      console.log(res)
      // 将选中的商品 筛选出来
      state.checked = res.data
        .filter((item) => {
          return item.is_checked === 1
        })
        .map((item) => item.goods_id)
    }
    // 修改商品选中状态
    const changeCheck = async (newAry) => {
      state.checked = newAry
      if (state.goodsList.length === state.checked.length) {
        checkedAll.value = true
      } else {
        checkedAll.value = false
      }
      console.log(checkedAll.value)
      await chengChecked(newAry)
      console.log(newAry)
    }
    // 业务逻辑
    // 提交订单
    const onSubmit = () => {
      console.log('提交')
    }
    // 全选
    const checkAll = () => {
      checkedAll.value
        ? checkboxGroup.value.toggleAll(true)
        : checkboxGroup.value.toggleAll()
    }
    return {
      checkedAll,
      checkboxGroup,
      ...toRefs(state),
      onSubmit,
      checkAll,
      changeCheck
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-card__content {
  padding: 10px 0;
  // #969799
}
/deep/.van-card__price {
  display: block;
}
/deep/.van-checkbox,
/deep/.van-card__footer {
  display: inline-block;
}
/deep/.van-card {
  padding-left: 35px;
  position: relative;
  .checkbox {
    position: absolute;
    top: 40px;
    left: 8px;
  }
}
// 底部提交栏
/deep/.van-submit-bar {
  bottom: 50px;
  .van-checkbox {
    display: flex;
  }
}
.num {
  float: right;
}
.price {
  color: #f53a3a;
  font-weight: bold;
}
.stepper {
  float: right;
}
</style>
