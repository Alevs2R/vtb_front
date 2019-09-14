<template>
    <f7-page class="board-page">
        <div>
            <f7-navbar  class="board-page-navbar">
                <f7-nav-left>
                    <i class="f7-icons" style="padding-left: 10px;color: white;cursor:pointer;"  @click="back">chevron_left</i>
                </f7-nav-left>
                <f7-nav-title style="padding-left: 10px;color: white;">Голосования</f7-nav-title>
                <f7-nav-right>
                    <i class="f7-icons" style="padding-right: 10px;color: white;cursor:pointer;">bars</i>
                </f7-nav-right>
            </f7-navbar>
        </div>
        <f7-panel right resizable>
            <f7-view>
                <f7-page>
                    <f7-block>Right panel content</f7-block>
                </f7-page>
            </f7-view>
        </f7-panel>

        <room-item-list
            :events="events"
        >
        </room-item-list>
    </f7-page>
</template>

<script>
  import {mapState} from 'vuex'
  import RoomItemList from "../components/roomItemList";

  export default {
    name: "board",
    components: {RoomItemList},
    computed: {
      ...mapState(['email', 'events'])
    },
    methods: {
      back () {
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
        }
    }

</style>
