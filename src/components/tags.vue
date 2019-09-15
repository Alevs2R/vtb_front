<template>
    <div class="block-tags" @click="viewFile">
        <img :src="att" class="block-tags-img" />
        <span class="block-tags-name">{{getTitle}}</span>
    </div>
</template>

<script>
  import att from '../../src/assets/attachment.svg'
  export default {
    name: "tags",
    props: ["file"],
    data () {
      return {
        att
      }
    },

    computed: {
      getTitle () {
        return  this.file.title.slice(0,25)
      }
    },

    methods: {
      viewFile () {
        window.open(`http://${process.env.VUE_APP_API_HOST}:${
          process.env.VUE_APP_API_PORT
        }/resources/${this.file.title}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
    .block-tags {
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
