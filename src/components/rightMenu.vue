<template>
    <f7-page>
        <sidebar
                :count-active="countActive"
                rightMenu
        ></sidebar>
    </f7-page>
</template>

<script>
  import user_icon from "../assets/user.svg";
  import Sidebar from "./sidebar";

  export default {
    name: "rightMenu",
    components: {Sidebar},
    props: {
      user: {
        type: Object,
        default: {}
      },
      countActive: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        user_icon
      }
    },
    methods: {
      changeList(value) {
        this.active = value
        this.$store.commit('setMode', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../css/main";

    .ios .page {
            background: $main-background !important;
    }

    .block-right{
        &-profile{
            display: flex;
            align-items: center;

            &-name {
                display: flex;
                justify-content: center;
                color: black;
            }

            &-img {
                height: 64px;
                width: 64px;
                margin-right: 30px;
            }
        }
    }
</style>
