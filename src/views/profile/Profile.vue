<template>
  <div class="Profile">
    <h1>我的</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Profile',
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
