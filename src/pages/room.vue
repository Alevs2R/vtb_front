<template>
    <f7-page>
        <div>
            <navbar is-back></navbar>
            <div class="room-page">
                <f7-block-title class="room-page-title">{{room.title}}</f7-block-title>
                <f7-block strong>
                    <p>{{room.description}}</p>
                </f7-block>
                <div class="room-page-files">
                    <tags v-for="file in room.attachments" :key="file.id" :file="file"></tags>
                </div>
                <f7-row>
                    <f7-col width="100" tablet-width="50" desktop-width="50" v-for="poll in room.votings"
                            :key="poll.id">
                        <poll :poll="poll"></poll>
                    </f7-col>
                </f7-row>
            </div>
        </div>
    </f7-page>
</template>

<script>
  import Navbar from "../components/navbar";
  import Tags from "../components/tags";
  import { mapState } from "vuex";
  import Poll from "../components/poll";


  export default {
    name: "room",
    components: { Poll, Tags, Navbar },
    data() {
      return {};
    },
    computed: {
      ...mapState(["room"])
    },
    created() {
      this.$store.dispatch("getRoom", {
        id: this.$f7route.params.roomId
      });
    }
  };
</script>

<style lang="scss" scoped>
    .room-page {
        padding: 0 10px;
        margin-bottom: 50px;

        &-title {
            font-size: 24px;
            color: black;
            font-weight: 500;

        }

        &-files {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin-bottom: 30px;
        }

        &-polls {
            display: flex;
            width: 100%;
        }
    }
</style>
