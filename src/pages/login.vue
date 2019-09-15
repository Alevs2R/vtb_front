<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen class="login-screen-page vtb-login">
        <f7-login-screen-title>VTB Online Meet Up</f7-login-screen-title>
        <div class="login-screen-logo">
            <vtb-logo></vtb-logo>
        </div>
        <f7-list form>
            <f7-list-input
                    type="email"
                    placeholder="Введите корпоративную почту"
                    @input="email = $event.target.value"
                    :value="email"
            ></f7-list-input>
            <f7-list-input
                    type="password"
                    placeholder="Введите пароль"
                    @input="password = $event.target.value"
                    :value="password"
            ></f7-list-input>
            <f7-list>
                <f7-list-button fill @click="signIn">Войти</f7-list-button>
                <f7-list-button fill @click="enterByPhone">Войти по номеру телефона</f7-list-button>
            </f7-list>
        </f7-list>
    </f7-page>
</template>

<script>
  import mapGetters from 'vuex'
  import vtbLogo from "../components/vtbLogo";

  export default {
    name: "main",
    components: {vtbLogo},
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {

      enterByPhone() {
        this.$f7router.navigate({
          name: 'enter-phone'
        });
      },

      signIn() {
        this.$store.dispatch('login', {
          email: 'user1',
          password: 'user1'
        })
          .then((data) => {
            this.$f7router.navigate({
              name: 'user',
              params: {
                userId: 150
              }
            });
            return
          })
          .catch((error) => {
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

    .bottom-row {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 15px;
    }

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
