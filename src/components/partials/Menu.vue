<template>
    <nav class="menu">
        <div class="logo-container float-left">
            <router-link :to="{ name: 'Home' }">
                <img class="logo" src="/static/images/logo.png">
            </router-link>
        </div>
        <div class="about-link-container float-right">
            <router-link :to="{ name: 'About' }" class="about-link">
                <div class="about-link-top"></div>
                <div class="about-link-bottom"></div>
            </router-link>
        </div>
        <div class="clearfix"></div>
    </nav>
</template>

<script>
  export default{
    name: 'menu',
  };
</script>
