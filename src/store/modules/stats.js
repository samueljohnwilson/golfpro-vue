const state = {
  average: 1,
};

const getters = {
  average: (_state) => _state.average,
};

const actions = {
  setAverage({ commit }, value) {
    commit('SET_AVERAGE', value);
  },
};

const mutations = {
  ['SET_AVERAGE'](_state, value) {
    _state.average = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
