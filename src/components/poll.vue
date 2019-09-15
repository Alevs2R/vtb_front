<template>
    <div class="block-poll">
        <vote :votes="poll.answers" :title="poll.title" :total_votes="this.totalVotes" :selected="selected" :changeVoteEx="changeVote" :cancel_vote="cancelVote" />
    </div>
</template>

<script>
  import Vote from "./vote";
  export default {
    name: "poll",
    props: ["poll"],
    components: {Vote},
    data: () => ({
      selected: null
    }),
    methods: {
      changeVote(vote) {
          this.selected = vote.id
      },
      cancelVote() {
        this.selected = null;
      }
    },
    computed: {
      totalVotes() {
        let sum = 0;
        this.poll.answers.forEach(item => {
          sum += item.voted;
        });
        return sum;
      }
    }
  }
</script>

<style lang="scss" scoped>
    .block-poll {
        width: 100%;
        background: linear-gradient(90deg, #1A4ED4 -6.61%, #1557FF 92.75%);
        border-radius: 5px;
    }
</style>
