<template>
    <div class="sidebar">
        <div class="profile">
            <img :src="user_icon" class="profile_img" />
            <span class="profile_name">{{user.first_name}}</span>
        </div>
        <div class="event_sections">
            <div :class="{'event_section':true, 'active': active === 'active'}" @click="changeList('active')">Текущие
                <div class="event_count">2</div>
            </div>
            <div :class="{'event_section':true, 'active': active === 'past'}"  @click="changeList('past')">Прошедшие</div>
        </div>
        <div class="create_btn_container">
            <div class="light_button" style="width: 60%">Создать</div>
        </div>
    </div>
</template>

<script>
  import user_icon from "../assets/user.svg";
  import { mapState } from 'vuex'

  export default {
    name: "sidebar",
    data: function() {
      return {
        user_icon,
        active: 'active'
      };
    },

    computed: {
      ...mapState(["user"])
    },

    methods: {
      changeList(value) {
        this.active = value
        this.$emit('changeList', value)
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "../css/main";

    .sidebar {
        display: block;
        width: 250px;
        background: white;
        border-radius: 5px;
        font-size: 16px;
        min-height: 350px;
    }

    @media screen and (max-width: 500px) {
        .sidebar {
            display: none;
        }
    }

    .profile {
        padding: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .profile_img {
        width: 28px;
        height: 28px;
        margin-right: 15px;
    }

    .profile_name {
        font-size: 16px;
    }

    .event_count {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        position: absolute;
        top: 8px;
        right: 30px;
        border-radius: 50%;
        border: 1px solid $main-color;
        color: $main-color;
    }

    .event_section {
        line-height: 45px;
        padding-left: 40px;
        position: relative;
        &.active {
            background: $main-color;
            color: #ffffff;

            .event_count {
                border-color: white;
                color: white;
            }
        }
        &:hover {
            background: lighten($main-color, 10%);
            color: #ffffff;
            cursor: pointer;
            .event_count {
                border-color: white;
                color: white;
            }
        }
    }

    .create_btn_container {
        text-align: center;
        margin: 20px 0;
    }

    .event_sections{
        border-bottom: 1px solid $main-background;
        border-top: 1px solid $main-background;
    }

</style>
