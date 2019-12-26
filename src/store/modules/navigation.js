const DEFAULT_DRAWER = false;

const state = {
  drawer: DEFAULT_DRAWER,
};

const getters = {
  drawer: (_state) => _state.drawer,
};

const actions = {
  openDrawer({ commit }) {
    commit('SET_DRAWER', true);
  },
  closeDrawer({ commit }) {
    commit('SET_DRAWER', false);
  }
};

const mutations = {
  ['SET_DRAWER'](_state, bool) {
    _state.drawer = bool;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
