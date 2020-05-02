import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from './components/Landing';
// import Home from './components/Home';

Vue.use(VueRouter);

const LandingPage = { Landing };
// const HomePage = { Home };

const routes = [
  { path: '/', component: LandingPage },
  // { path: '/home', component: HomePage }
]

export default new VueRouter({
  routes
})