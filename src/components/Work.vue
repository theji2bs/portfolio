<template>
    <div class="work">
        <h1>Work {{$route.params.id}}</h1>
    </div>
</template>

<script>
import works from '../utils/globals';

export default{
  name: 'work',
  data() {
    return {
      work: {},
      works: [],
    };
  },
  mounted() {
    works.query().then((response) => {
      this.works = response.data;
      this.work = this.works.find(this.currentWork);
    });
  },
  methods: {
    currentWork(work) {
      return work.id === parseInt(this.$route.params.id, 10);
    },
  },
};
</script>
