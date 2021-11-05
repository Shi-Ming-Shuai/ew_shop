<template>
  <div class="Register">
    <!-- 公共导航栏 -->
    <van-nav-bar title="用户注册" left-arrow @click-left="$router.back()" />
    <!-- 表单 -->
    <van-form class="form-wrap" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="name"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />
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
        <van-field
          v-model="password_confirmation"
          type="password"
          name="password_confirmation"
          label="确认密码"
          placeholder="确认密码"
          :rules="[
            { required: true, message: '请填写确认密码' },
            {
              validator: confirmPass,
              message: '两次密码不一致'
            }
          ]"
        />
      </van-cell-group>
      <div class="go-login">
        <p @click="$router.replace('/login')">已有账号,<span>立即登录</span></p>
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
import { userReg } from '@/network/user'
export default {
  name: 'Register',
  props: {},
  components: {},
  setup() {
    const router = useRouter()
    // 邮箱正则验证
    const emailReg =
      /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    const state = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    // 业务逻辑
    // 确认密码
    const confirmPass = () => {
      return state.password === state.password_confirmation
    }
    const passLength = () => {
      return !(state.password.length < 6)
    }
    // 登录
    async function onSubmit() {
      try {
        await userReg(state)
        Toast.success('注册成功')
        setTimeout(() => {
          router.replace('/login')
        }, 800)
      } catch (err) {
        const errObj = err.response.data.errors
        const mesIndex = Object.keys(errObj)[0]
        console.dir(err.response.data.errors)
        Toast.fail(errObj[mesIndex][0])
      }
    }
    return {
      emailReg,
      ...toRefs(state),
      onSubmit,
      confirmPass,
      passLength
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
.go-login {
  margin-top: 15px;
  text-align: center;
  color: #8aaea3;
  span {
    color: red;
  }
}
</style>
