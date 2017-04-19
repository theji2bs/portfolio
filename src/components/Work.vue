<template>
    <div class="work" :key="work.id">
        <header>
            <div class="work-container">
                <img class="work-cover" :src="work.cover">
                <div class="work-numbering">
                    <span class="work-total">0{{works.length}}</span>
                    <span class="numbering-separator"></span>
                    <span class="work-current">0{{work.id}}</span>
                </div>
                <div class="work-title">
                    <h2>{{work.title}}</h2>
                    <h3>{{work.role}}</h3>
                    <div class="title-separator"></div>
                </div>
                <div class="work-link">
                    <a :href="work.link" target="_blank"><p>Visit the website</p></a>
                </div>
            </div>
            <div class="work-scroll-container">
                <div class="work-scroll-wrapper">
                    <p>scroll</p>
                    <div class="work-scroll-separator"></div>
                </div>
            </div>
        </header>
        <section id="scroll" class="work-description-container">
            <div class="work-client">{{ work.client }}</div>
            <div class="work-description">
                <span class="title">Description</span>
                <span class="content">{{ work.description }}</span>
            </div>
            <div class="work-informations">
                <span class="group">
                    <span class="title">Project type</span>
                    <span class="content">{{ work.type }}</span>
                </span>
                <span class="group">
                    <span class="title">Client</span>
                    <span class="content">{{ work.client }}</span>
                </span>
                <span class="group">
                    <span class="title">Role</span>
                    <span class="content">{{ work.role }}</span>
                </span>
                <span class="group">
                    <span class="title">Date</span>
                    <span class="content">{{ work.date }}</span>
                </span>
            </div>
        </section>
        <section class="work-collection-container">
            <ul>
                <li v-for="(image, index) in work.images">
                    <div class="work-collection-index">0{{ index + 1 }}</div>
                    <div class="work-collection-image">
                        <img :src="image">
                    </div>
                </li>
            </ul>
        </section>
        <footer>
            <div class="prev-work float-left">
                <router-link
                        class="prev-work-ink"
                        :to="{ name: 'work', params: { id: work.id - 1 }}"
                        v-if="!isFirstWork"
                >
                    <p>Prev</p>
                    <span class="prev-work-title"><p>{{ prevWork.title }}</p></span>
                </router-link>
            </div>
            <div class="next-work float-right">
                <router-link
                        class="next-work-ink"
                        :to="{ name: 'work', params: { id: work.id + 1 }}"
                        v-if="!isLastWork"
                >
                    <p>Next</p>
                    <span class="next-work-title"><p>{{ nextWork.title }}</p></span>
                </router-link>
            </div>
            <div class="clearfix"></div>
        </footer>
    </div>
</template>

<script>
import $ from 'jquery';
import works from '../utils/globals';

export default{
  name: 'work',
  data() {
    return {
      work: {},
      nextWork: {},
      prevWork: {},
      works: [],
      isLastWork: false,
      isFirstWork: false,
    };
  },
  mounted() {
    works.query().then((response) => {
      this.works = response.data;
      this.resourcesDefinition();
    });

    $('.work-scroll-wrapper').click(() => {
      $('html, body').animate({
        scrollTop: $('#scroll').offset().top - 65,
      }, 'slow');
    });
  },
  methods: {
    resourcesDefinition() {
      this.work = this.works.find(this.findCurrentWork);
      this.nextWork = this.works.find(this.findNextWork);
      this.prevWork = this.works.find(this.findPrevWork);
      this.isLastWork = this.work.id === this.works.length;
      this.isFirstWork = this.work.id === 1;
    },
    findCurrentWork(work) {
      return work.id === parseInt(this.$route.params.id, 10);
    },
    findNextWork(work) {
      return work.id === parseInt(parseInt(this.$route.params.id, 10) + 1, 10);
    },
    findPrevWork(work) {
      return work.id === parseInt(parseInt(this.$route.params.id, 10) - 1, 10);
    },
  },
  watch: {
    $route() {
      this.resourcesDefinition();
    },
  },
};
</script>
