<template>
    <div class="option">
        <input @change="$emit('change', value)" type="text" v-model="value" />
        <div class="option-cross">
            <img :src="Multiply" />
        </div>
    </div>
</template>

<script>
  import Multiply from "../assets/multiply.svg";

  export default {
    name: "CreateVoteOption",
    data() {
      return {
        Multiply,
        value: ''
      };
    },
  };
</script>

<style lang="scss" scoped>
    @import '../css/main';

    .option {
        font-size: 16px;
        line-height: 35px;
        height: 35px;
        padding: 0 20px;
        margin-bottom: 15px;
        border-radius: 5px;
        background: $light-grey-color;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        input {
            height: 35px;
        }
        &-cross {
            float: right;
            background: $gray-color;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            cursor: pointer;
            img {
                width: 12px;
                height: 12px;
            }
        }
    }
</style>
