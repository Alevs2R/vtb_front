<template>
    <f7-page class="board-page">
        <div>
            <f7-navbar  class="board-page-navbar">
                <f7-nav-title style="padding-left: 10px;color: white;">Голосования</f7-nav-title>
                <f7-nav-right>
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
    data () {
      return {

      }
    },

    methods: {
    },

    created () {
      this.$store.dispatch('getRooms', {
        user_id: 12,
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

</style>
