<template>
    <f7-page class="board-page">
        <div>
            <f7-navbar  class="board-page-navbar">
                <f7-nav-title style="padding-left: 10px;color: white;">Голосования</f7-nav-title>
                <f7-nav-right v-if="!$device.desktop">
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
            <div class="sidebar">
                azazakek
            </div>
            <div class="main_content">
                <room-item-list
                        :events="events"
                >
                </room-item-list>
            </div>
        </div>
    </f7-page>
</template>

<script>
  import {mapState} from 'vuex'
  import RoomItemList from "../components/roomItemList";

  export default {
    name: "board",
    components: { RoomItemList },
    computed: {
      ...mapState(["email", "events"])
    },
    data () {
      return {

      }
    },

    methods: {
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
        max-width: 1000px;
        margin: 30px auto 0;
    }

    .main_content {
        flex: 1;
    }

    .sidebar {
        display: block;
        width: 250px;
        background: white;
        border-radius: 5px;
        margin-right: 30px;
    }

    @media screen and (max-width: 500px) {
        .sidebar {
            display: none;
        }
    }
</style>
