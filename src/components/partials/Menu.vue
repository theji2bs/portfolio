<template>
    <nav class="menu">
        <div class="logo-container float-left">
            <router-link :to="{ name: 'home' }">
                <img class="logo" src="/static/images/logo.png">
            </router-link>
        </div>
        <div class="about-link-container float-right">
            <router-link
                    class="about-link"
                    :to="{ name: 'about' }"
                    v-if="isOnHome"
            >
                <div class="about-link-top"></div>
                <div class="about-link-bottom"></div>
            </router-link>
            <router-link
                    class="about-close"
                    :to="{ name: 'home' }"
                    v-else
            >
                <div class="about-close-wrapper">
                    <p>close</p>
                    <img class="close-button" src="/static/images/close-button.svg">
                </div>
            </router-link>
        </div>
        <div class="clearfix"></div>
    </nav>
</template>

<script>
  export default{
    name: 'menu',
    data() {
      return {
        isOnHome: true,
      };
    },
    mounted() {
      this.isOnHome = this.$route.path === '/' || this.$route.path === '/home';
    },
    watch: {
      $route(to) {
        this.isOnHome = to.path === '/' || to.path === '/home';
      },
    },
  };
</script>
