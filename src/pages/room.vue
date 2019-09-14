<template>
    <f7-page>

    </f7-page>
</template>

<script>
  export default {
    name: "room",
    data () {
      return {

      }
    },
    created () {
      this.$store.dispatch('getRoom', {
        id: this.$f7route.params.roomId,
      })
    }
  }
</script>

<style scoped>

</style>
