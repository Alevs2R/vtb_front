<template>
    <f7-page class="room-page">
        <navbar back></navbar>
        <f7-block-title class="room-page-title">{{room.title}}</f7-block-title>
        <f7-block strong>
            <p>{{room.description}}</p>
        </f7-block>
    </f7-page>
</template>

<script>
  import Navbar from "../components/navbar";
  import {mapState} from 'vuex'
  export default {
    name: "room",
    components: {Navbar},
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['room'])
    },
    created () {
      this.$store.dispatch('getRoom', {
        id: this.$f7route.params.roomId,
      })
    }
  }
</script>

<style lang="scss" scoped>
    .room-page{
        &-title{
            font-size: 24px;
            color: black;
            font-weight: 500;
        }
    }
</style>
