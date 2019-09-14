<template>
  <f7-page class="main-page">
    <f7-login-screen class="demo-login-screen" opened>
      <f7-page login-screen>
        <f7-login-screen-title>VTB Online Meet Up</f7-login-screen-title>
        <f7-list form>
          <f7-list-input
                  type="email"
                  placeholder="Введите копоративную почту"
                  @input="email = $event.target.value"
                  :value="email"
          ></f7-list-input>
          <f7-list-input
                  type="password"
                  placeholder="Введите пароль"
                  @input="password = $event.target.value"
                  :value="password"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">Войти</f7-list-button>
          <f7-block-footer></f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-login-screen>
  </f7-page>
</template>

<script>
  export default {
    name: "main",
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      signIn () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../css/main";


</style>
