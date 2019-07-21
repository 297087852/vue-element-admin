<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="form" :rules="rules">
      <h2 class="title">VUE ADMIN TEMPLATE
        <lang-select class="lang-select"></lang-select>
      </h2>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="form.username"  :placeholder="$t('login.account')" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="form.password" :placeholder="$t('login.password')" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="submit">{{$t('login.loginBtn')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  name: 'Login',

  components: {LangSelect},

  data () {
    return {
      form: {
        username: '',
        password: ''
      },

      rules: {
        username: [ {required: true, trigger: 'blur', message: 'username'} ],
        password: [ {required: true, trigger: 'blur', message: 'password'} ]
      }
    }
  },

  computed: {},

  watch: {},

  mounted () {},

  methods: {
    async submit () {
      try {
        await this.$refs.loginForm.validate()
        this.$message.success('登录成功')
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style lang='scss'>
$page_bg:#283443;
$page_padding: 160px 40px;
$form_width: 440px;
$formItem_border_color: rgba(255, 255, 255, 0.1);

.login-container {
  width: 100%;
  height: 100%;
  background-color: $page_bg;
  padding: $page_padding;
  .title {
    position: relative;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
    .lang-select {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  input {
    color: #fff;
    outline: none;
    border: 0;
    background-color: transparent;
  }
  .el-form {
    width: $form_width;
    max-width: 100%;
    margin: 0 auto;
    .el-form-item {
      border: 1px solid $formItem_border_color;
      border-radius: 5px;
      .svg-container {
        padding-left: 15px;
        color: #889aa4;
        display: inline-block;
      }
      .el-input {
        width: 85%;
      }
    }
  }
}
</style>
