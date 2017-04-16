import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const works = Vue.resource('/static/resources/works.json');

export default works;
