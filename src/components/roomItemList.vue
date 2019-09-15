<template>
    <f7-row style="margin-bottom: 50px">
        <f7-col width="100" tablet-width="50" desktop-width="50" v-for="event in events" :key="event.id">
            <room-item
                    :event="event"
            ></room-item>
        </f7-col>
    </f7-row>
</template>

<script>
  import RoomItem from "./roomItem";


  export default {
    name: "roomItemList",
    components: { RoomItem },
    props: {
      events: {
        type: Array,
        default: []
      }
    }
  };
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
