<template>
    <f7-page class="board-page" @click="rightMenu=!false">
        <div>
            <f7-navbar class="board-page-navbar">
                <f7-nav-left>
                    <i class="f7-icons" style="padding-left: 10px;color: white;cursor:pointer;" @click="back">chevron_left</i>
                </f7-nav-left>
                <f7-nav-title style="padding-left: 10px;color: white;">Голосования</f7-nav-title>
                <f7-nav-right>
                    <i class="f7-icons"
                       style="padding-right: 10px;color: white;cursor:pointer;"
                       @click="rightMenu=!rightMenu">bars</i>
                </f7-nav-right>
            </f7-navbar>
        </div>
        <f7-panel right resizable theme-dark :opened="rightMenu">
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
  import { mapState } from "vuex";
  import RoomItemList from "../components/roomItemList";


  export default {
    name: "board",
    components: { RoomItemList },
    computed: {
      ...mapState(["email", "events"])
    },
    data () {
      return {
        rightMenu: false
      }
    },

    methods: {
      back() {
        this.$f7router.back();
      }
    },

    created () {
      this.$store.dispatch('getRooms', {
        user_id: 12,
      })
    }
  };
</script>

<style lang="scss" scoped>
    @import "../css/main";

    .board-page {
        &-navbar {
            background: $main-color;
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
