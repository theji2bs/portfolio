<template>
    <div class="home">
        <div class="scroll-button">
            <span>scroll</span>
            <img  src="/static/images/right-arrow.svg">
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="work in works" :key="work.id">
                <router-link
                        class="carousel-work-link"
                        :to="{ name: 'work', params: { id: work.id }}"
                >
                    <div class="carousel-work-container">
                        <img class="carousel-work-cover" :src="work.cover">
                        <div class="carousel-work-date">
                            <p>{{work.date}}</p>
                        </div>
                        <div class="carousel-numbering">
                            <span class="carousel-total">0{{works.length}}</span>
                            <span class="numbering-separator"></span>
                            <span class="carousel-current">0{{work.id}}</span>
                        </div>
                        <div class="carousel-work-title">
                            <h2>{{work.title}}</h2>
                            <h3>{{work.role}}</h3>
                            <div class="title-separator"></div>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  import $ from 'jquery';
  import works from '../utils/globals';

  export default{
    name: 'home',
    data() {
      return {
        works: [],
        isLastSlide: false,
        swiperOption: {
          notNextTick: true,
          mousewheelControl: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 250,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender(thisSwiper, index, className) {
            return `<span class="${className}"><span class="swiper-pagination-bullet-custom"></span><span class="bullet-index">0${index + 1}</span></span>`;
          },
          slideToClickedSlide: true,
          keyboardControl: true,
          autoplay: 500,
        },
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    },
    mounted() {
      this.swiper.stopAutoplay();
      console.log('swiper', this.swiper);
      works.query().then((response) => {
        this.works = response.data;
      });
      $('.scroll-button').hover(() => {
        console.log('hover');
        this.swiper.startAutoplay();
      }, () => {
        this.swiper.stopAutoplay();
      });
    },
    beforeDestroy() {
      this.$off();
    },
  };
</script>
