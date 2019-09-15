<template>
    <f7-page class="gray_back">
        <div>
            <navbar is-back></navbar>
            <div class="room-page">
                <h1 class="room-page-title">{{room.title}}</h1>
                <f7-row>
                    <f7-col width="100" tablet-width="70" desktop-width="80">
                        <p>{{room.description}}</p>
                    </f7-col>
                    <f7-col width="100" tablet-width="30" desktop-width="20">
                        <div class="grey-btn">
                            <img :src="PeopleIcon" class="grey-btn-img" />
                            <span class="grey-btn-name">Участники</span>
                        </div>
                        <div class="grey-btn">
                            <img :src="EditIcon" class="grey-btn-img" />
                            <span class="grey-btn-name">Редактировать</span>
                        </div>
                    </f7-col>
                </f7-row>
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
  import EditIcon from "../assets/edit.svg";
  import PeopleIcon from "../assets/group.svg"


  export default {
    name: "room",
    components: { Poll, Tags, Navbar },
    data() {
      return { EditIcon, PeopleIcon };
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
    @import "../css/main";

    .gray_back {
        background: $main-background;
    }
    .room-page {
        max-width: 1000px;
        margin: 30px auto;
        background: white;
        border-radius: 5px;
        padding: 10px 30px;

        &-title {
            font-size: 26px;
            color: black;
            font-weight: 400;
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

    .grey-btn {
        display: flex;
        align-items: center;
        width: 180px;
        height: 40px;
        border-radius: 5px;
        background: #F5F5F5;
        margin: 5px;
        cursor: pointer;

        &:hover {
            background: darken(#F5F5F5, 10);
        }

        &-img {
            height: 24px;
            width: 24px;
            padding: 0 15px;
        }
    }
</style>
