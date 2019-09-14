<template>
    <f7-page class="board-page">
        <div>
            <f7-navbar  class="board-page-navbar">
                <f7-nav-title style="padding-left: 10px;color: white;">Голосования</f7-nav-title>
                <f7-nav-right v-if="!isDesktop">
                    <f7-button
                            raised panel-open="right"
                    >
                        <i class="f7-icons"
                           style="color: white;cursor:pointer;">bars</i>
                    </f7-button>
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

        <div class="container">
            <sidebar @changeList="changeList"/>
            <div class="main_content">
                <room-item-list
                        :events="listEvents"
                >
                </room-item-list>
            </div>
        </div>
    </f7-page>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import RoomItemList from "../components/roomItemList";
  import Sidebar from "../components/sidebar";

  export default {
    name: "board",
    components: { Sidebar, RoomItemList },
    data () {
      return {
        typeEvents: 'active'
      }
    },

    computed: {
      ...mapState(["user","isDesktop"]),
      ...mapGetters(["pastEvents", 'activeEvents']),

      listEvents () {
        switch (this.typeEvents) {
          case 'past':
            return this.pastEvents
            break
          case 'active':
            return this.activeEvents
        }
        return []
      }
    },

    methods: {
      changeList (value) {
        this.typeEvents = value
      }
    },

    created () {
      this.$store.dispatch('getRooms', {
        user_id: 150,
      })
    }
  }
</script>

<style lang="scss" scoped>
    @import "../css/main";

    .board-page {
        background: $main-background;

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

    .container {
        display: flex;
        flex-direction: row;
        max-width: 1100px;
        margin: 30px auto 0;
    }

    .main_content {
        flex: 1;
        margin: 0 30px;
    }
</style>
