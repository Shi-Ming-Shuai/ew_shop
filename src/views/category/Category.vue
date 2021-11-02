<template>
  <div class="Category">
    <h1>类别</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Category',
  props: {},
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
