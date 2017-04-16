<template>
    <div class="home"></div>
</template>

<script>
  import works from '../utils/globals';

  export default{
    name: 'home',
    mounted() {
      works.query().then((response) => {
        console.log(response.data);
      });
    },
  };
</script>
