<template>
    <div class="sidebar">
        <img :src="user_icon" />
    </div>
</template>

<script>
  import user_icon from '../assets/user.svg';

  export default {
    name: "sidebar"
  };
</script>

<style scoped>
    .sidebar {
        display: block;
        width: 250px;
        background: white;
        border-radius: 5px;
        margin-right: 30px;
    }

    @media screen and (max-width: 500px) {
        .sidebar {
            display: none;
        }
    }
</style>
