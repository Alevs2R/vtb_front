<template>
  <f7-app id="app"
          :params="f7params">
    <f7-view id="main-view"
             :router="true"
             :push-state="true"></f7-view>
  </f7-app>
</template>
<script>


  import {mapGetters} from "vuex";
  import routes from "./router/index";
  import localsStorage from "./js/localStorage";

  export default {
    data() {
      return {
        popupOpened: false,
        isIE: this.$device.ie,
        isLogin: false,
        f7params: {
          id: "io.framework7.hack",
          name: "Hack",
          theme: "ios",
          routes,
          pushState: true,
          history: true,
          on: {
            routeChanged: (next, prev, router) => {
              localStorage.setItem("routersHistory", router.history);
            }
          },
        },
      };
    },

    created () {
      this.$store.commit('isDesktop')
      window.addEventListener('resize', () => {
        this.$store.commit('isDesktop')
      })
      if(localsStorage.getStorage('app') && localsStorage.getStorage('app').access_token)
        this.$store.dispatch('autorization')
    }
  };
</script>
<style>
</style>
