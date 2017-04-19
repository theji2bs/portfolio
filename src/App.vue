<template>
  <div id="app">
    <app-menu></app-menu>
    <transition
            name="fade"
            mode="out-in"
            appear
            v-on:after-enter="afterEnter"
            v-on:before-leave="beforeLeave"
            v-on:after-appear="afterAppear"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import $ from 'jquery';
  import AppMenu from './components/partials/Menu';

  export default {
    name: 'app',
    components: {
      AppMenu,
    },
    methods: {
      afterEnter(el) {
        if ($(el).hasClass('about')) {
          $(el).addClass('visible');
        } else if ($(el).hasClass('work')) {
          $('nav').fadeIn();
        }
      },
      beforeLeave(el) {
        if ($(el).hasClass('about')) {
          $(el).removeClass('visible');
        }
      },
      afterAppear(el) {
        $('nav').fadeIn();
        if ($(el).hasClass('about')) {
          $(el).addClass('visible');
        } else if ($(el).hasClass('home')) {
          $(el).fadeIn();
        }
      },
    },
  };
</script>

<style src="./assets/style/main.sass" lang="sass"></style>
