<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppMenu from './components/partials/Menu';

  export default {
    name: 'app',
    components: {
      AppMenu,
    },
  };
</script>

<style src="./assets/style/main.sass" lang="sass"></style>
