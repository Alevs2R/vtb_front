<template>
    <f7-page class="board-page">
        <div>
            <navbar menu></navbar>
            <f7-panel right resizable class="board-page-panel">
                    <right-menu
                            :user="user"
                            :countActive="activeEvents.length"
                    >
                    </right-menu>
            </f7-panel>

            <div class="container">
                <sidebar
                        :countActive="activeEvents.length"
                />
                <div class="main_content">
                    <room-item-list
                            :events="listEvents"
                    >
                    </room-item-list>
                </div>
            </div>
        </div>
    </f7-page>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import RoomItemList from "../components/roomItemList";
  import Sidebar from "../components/sidebar";
  import RightMenu from "../components/rightMenu";
  import Navbar from "../components/navbar";

  export default {
    name: "board",
    components: {Navbar, RightMenu, Sidebar, RoomItemList},
    data() {
      return {}
    },

    computed: {
      ...mapState(["user", "isDesktop", "mode"]),
      ...mapGetters(["pastEvents", 'activeEvents']),

      listEvents() {
        switch (this.mode) {
          case 'past':
            return this.pastEvents;
          case 'active':
            return this.activeEvents
        }
        return []
      }
    },

    created() {
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
