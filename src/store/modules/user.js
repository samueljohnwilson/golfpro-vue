const DEFAULT_USER = null;

const state = {
  user: DEFAULT_USER,
};

const getters = {
  user: (_state) => _state.user,
};

const actions = {
  setUser({ commit }) {
    commit('SET_USER', true);
  },
};

const mutations = {
  ['SET_USER'](_state, user) {
    _state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
