<template>
    <div>
        <f7-navbar  class="board-page-navbar">
            <f7-nav-left >
                <i v-if="isBack"
                   class="f7-icons"
                   style="padding-left:10px;color: white;cursor:pointer;min-width: 10px"
                   @click="back"
                >chevrone_left</i>
            </f7-nav-left>
            <f7-nav-title style="padding-left: 10px;color: white;">Голосования</f7-nav-title>
            <f7-nav-right>
                <f7-button
                        v-if="!isDesktop"
                        raised panel-open="right"
                >
                    <i class="f7-icons"
                       style="color: white;cursor:pointer;">bars</i>
                </f7-button>
            </f7-nav-right>
        </f7-navbar>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "navbar",
    props:{
      isBack: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapState(['isDesktop'])
    },
    methods: {
      back() {
        this.$f7router.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../css/main";
    .board-page {
        &-navbar {
            background: $main-color;

            .button  {
                border: none;
                color: transparent;
                border-radius: 0;
                line-height: 0;
                height: 29px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
