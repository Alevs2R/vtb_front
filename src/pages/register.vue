<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen class="login-screen-page vtb-login">
        <f7-login-screen-title>VTB Online Meet Up</f7-login-screen-title>
        <div class="login-screen-logo">
            <vtb-logo></vtb-logo>
        </div>
        <f7-list form>
            <f7-list-input
                    type="email"
                    placeholder="Введите полученный код"
                    @input="code = $event.target.value"
                    :value="code"></f7-list-input>
            <f7-list-input
                    type="email"
                    placeholder="Введите ваше имя"
                    @input="name = $event.target.value"
                    :value="name"
            ></f7-list-input>
        </f7-list>
        <f7-list>
            <f7-list-button @click="signIn">Войти</f7-list-button>
            <f7-block-footer></f7-block-footer>
        </f7-list>
    </f7-page>
</template>

<script>
  import vtbLogo from "../components/vtbLogo";

  export default {
    name: "register",
    components: {vtbLogo},
    data() {
      return {
        name: '',
        surname: '',
        code: '',
        email: '',
        password: '',
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch('confirmRegister', {
          code: this.code,
          first_name: this.name,
          email: ' ' + Date.now(),
          password: ' ' + Date.now(),
          second_name: ' ' + Date.now(),
          phone: this.$store.state.phone
        })
          .then((data) => {
            this.$f7router.navigate({
              name: 'user',
              params: {
                userId: data.user_id
              }
            });
          })
          .catch(() => {
            var toastCenter = this.$f7.toast.create({
              text: "Проблемы с подключением к интернету",
              position: "center",
              closeTimeout: 1000
            });
            toastCenter.open();
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../css/main";

    .vtb-login {
        .login-screen {
            &-page {
                margin-top: 50px;
            }

            &-logo {
                display: flex;
                justify-content: center;
                margin-bottom: 60px;
            }

            &-title {
                margin-bottom: 20px;
            }
        }
    }


</style>
