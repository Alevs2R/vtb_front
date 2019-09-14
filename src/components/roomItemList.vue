<template>
    <div class="events-list">
        <room-item
                v-for="event in events"
                :event="event"
                :key="event.title"
        ></room-item>
    </div>
</template>

<script>
  import RoomItem from "./roomItem";

  export default {
    name: "roomItemList",
    components: {RoomItem},
    props: {
      events: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>
    .events-list {
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 100%;
        padding: 10px;
    }
</style>
