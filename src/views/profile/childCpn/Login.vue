<template>
  <div class="Login">
    <!-- 公共导航栏 -->
    <van-nav-bar title="用户登录" left-arrow @click-left="$router.back()" />
    <van-form class="form-wrap" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="email"
          type="text"
          name="email"
          label="电子邮箱"
          placeholder="电子邮箱"
          :rules="[
            { required: true, message: '请填写电子邮箱' },
            { pattern: emailReg, message: '请填写正确的电子邮箱格式' }
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[
            { required: true, message: '请填写密码' },
            {
              validator: passLength,
              message: '密码最少为6位字符 '
            }
          ]"
        />
      </van-cell-group>
      <div class="go-reg">
        <p @click="$router.replace('/register')">
          没有账号,<span>去注册</span>
        </p>
      </div>
      <div style="margin: 16px">
        <van-button
          class="btn-register"
          round
          block
          type="primary"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
// 请求
import { userLogin } from '@/network/user'
// 公共方法
import { setItem } from '@/utils/storage'
export default {
  name: 'Login',
  props: {},
  components: {},
  setup() {
    const router = useRouter()
    // 邮箱正则验证
    const emailReg =
      /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    const state = reactive({
      email: '',
      password: ''
    })
    // 业务逻辑
    const passLength = () => {
      return !(state.password.length < 6)
    }
    // 登录
    async function onSubmit() {
      try {
        const res = await userLogin(state)
        console.log(res)
        // 将token保存到本地
        Toast.success('登录成功')
        setItem('token', res.access_token)
        const timer = setTimeout(() => {
          router.back()
          clearTimeout(timer)
        }, 800)
      } catch (err) {
        Toast.fail('请检查用户名或密码')
      }
    }
    return {
      emailReg,
      ...toRefs(state),
      passLength,
      onSubmit
    }
  }
}
</script>

<style scoped lang="less">
.btn-register {
  border: 0;
  background: var(--color-nav-background);
}
.form-wrap {
  padding-top: 100px;
}
.go-reg {
  margin-top: 15px;
  text-align: center;
  color: #8aaea3;
  span {
    color: red;
  }
}
</style>
