<template>
    <div class="block-poll">
        <vote :votes="poll.answers" :title="poll.title" />
    </div>
</template>

<script>
  import Vote from "./vote";
  export default {
    name: "poll",
    props: ["poll"],
    components: {Vote},
  }
</script>

<style lang="scss" scoped>
    .block-poll {
        width: 100%;
        background: linear-gradient(90deg, #1A4ED4 -6.61%, #1557FF 92.75%);
        border-radius: 5px;
    }
</style>
