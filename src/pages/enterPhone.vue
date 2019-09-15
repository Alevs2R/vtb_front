<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen class="login-screen-page vtb-login">
        <f7-login-screen-title>VTB Online Meet Up</f7-login-screen-title>
        <div class="login-screen-logo">
            <vtb-logo></vtb-logo>
        </div>
        <f7-list form>
            <f7-list-input
                    type="email"
                    placeholder="Введите номер телефона"
                    @input="phone = $event.target.value"
                    :value="phone"
            ></f7-list-input>
            <f7-list>
                <f7-list-button fill @click="signIn">Отправить СМС</f7-list-button>
                <f7-list-button fill @click="goBack">Назад</f7-list-button>
            </f7-list>
        </f7-list>

    </f7-page>
</template>

<script>
  import vtbLogo from "../components/vtbLogo";

  export default {
    name: "enter-phone",
    components: {vtbLogo},
    data() {
      return {
        phone: '',
      }
    },
    methods: {
      goBack() {
        this.$f7router.navigate("/");
      },

      signIn() {

        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.phone)) {
          const toastCenter = this.$f7.toast.create({
            text: "Введите правильный номер",
            position: "center",
            closeTimeout: 1000
          });
          toastCenter.open();
          return;
        }

        this.$store.dispatch('sendCode', {
          phone: this.phone,
          email: ' ' + Date.now(),
          password: ' ' + Date.now()
        })
          .then(() => {
            this.$store.commit('setPhone', this.phone);
            this.$f7router.navigate({
              name: 'register'
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
