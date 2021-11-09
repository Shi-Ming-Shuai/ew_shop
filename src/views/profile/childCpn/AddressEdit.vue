<template>
  <div class="AddressEdit">
    <!-- 公共导航栏 -->
    <van-nav-bar title="新增地址" left-arrow @click-left="$router.back()" />
    <!--  -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { Toast } from 'vant'

export default {
  setup() {
    const searchResult = ref([])
    const areaList = ref({ a: 1 })
    const onSave = () => Toast('save')
    const onDelete = () => Toast('delete')
    const onChangeDetail = (val) => {
      if (val) {
        searchResult.value = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        searchResult.value = []
      }
    }

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail
    }
  }
}
</script>

<style scoped lang="less">
.AddressEdit {
  height: calc(100vh - 46px - 50px);
  background: #fff;
}
</style>
