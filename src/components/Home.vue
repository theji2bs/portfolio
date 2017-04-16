<template>
    <div class="home">
        <swiper :options="swiperOption">
            <swiper-slide v-for="work in works" :key="work.id">
                <div class="carousel-work-container">
                    <img class="carousel-work-cover" :src="work.cover">
                    <div class="carousel-work-date">
                        <p>{{work.date}}</p>
                    </div>
                    <div class="carousel-pagination">
                        <span class="carousel-total">0{{works.length}}</span>
                        <span class="pagination-separator"></span>
                        <span class="carousel-current">0{{work.id}}</span>
                    </div>
                    <div class="carousel-work-title">
                        <h2>{{work.title}}</h2>
                        <h3>{{work.role}}</h3>
                        <div class="title-separator"></div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  import works from '../utils/globals';

  export default{
    name: 'home',
    data() {
      return {
        works: [],
        swiperOption: {
          mousewheelControl: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 110,
        },
      };
    },
    mounted() {
      works.query().then((response) => {
        this.works = response.data;
      });
    },
  };
</script>
