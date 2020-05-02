import Vue from 'vue';
import Vuex from 'vuex';
import navigation from './modules/navigation';
import user from './modules/user';
import stats from './modules/stats';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
    user,
    stats
  }
})