<template>
    <div class="votes">
        <div class="poll_title">{{ title }}</div>
        <div
                v-for="vote in votes"
                :key="vote.id"
                class="vote_wrapper"
                v-on="{click: selected == vote.id ? () => { cancel_vote(vote) } : () => {}}"
                @click="changeVote(vote)"
        >
            <div
                    class="vote_bar"
                    :style="[ bar_animate ?  { width: Math.round((vote.count / total_votes) * 100) + '%' } : {}]"
            ></div>
            <div class="vote_left">
                <div class="vote_name">{{ vote.value}}</div>
            </div>
            <div class="vote_result">
                <i class="f7-icons" v-if="selected == vote.id">check</i>
                {{ vote.count }}
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props: ["votes", "selected", "total_votes", "cancel_vote", "title"],
    computed:{ ...mapState(["socket"])},
    data: () => ({
      bar_animate: false
    }),
    methods: {
      changeVote(vote){
        this.socket.send({
          type: 'vote',
          room_id: this.$f7route.params.roomId,
          user_id: this.$store.state.user.user_id,
          answer_id: vote.id,
          increment: 1
        })
      }
    },
    mounted() {
      setTimeout(() => { this.bar_animate = true }, 1);
    }
  };
</script>

<style scoped>
    .votes {
        padding: 10px 20px 20px;
        margin-bottom: 10px;
    }
    .vote_wrapper {
        background: rgba(0, 0, 0, 0.2);
        padding: 10px 10px;
        display: flex;
        flex-direction: row;
        color: #fff;
        margin-bottom: 10px;
        border-radius: 6px;
        justify-content: space-between;
        position: relative;
        font-size: 16px;
        align-items: center;
        cursor: pointer;
    }

    .vote_name {
    }

    .vote_result {
        z-index: 10;
        flex-shrink: 0;
    }

    .vote_left {
        color: #fff;
        z-index: 10;
    }

    .vote_artist {
        color: rgba(255,255,255,.7);
        font-weight: normal;
    }

    .vote_bar {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 5;
        transition: width ease-out 0.3s;
        width: 0;
    }

    .poll_title {
        font-size: 18px;
        color: white;
        margin: 10px 0;
    }

</style>
