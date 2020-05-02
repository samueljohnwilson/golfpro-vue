import { IContext } from '../types';

interface IStatsState {
  average: Number;
}

const state = {
  average: 1,
};

const getters = {
  average: (_state: IStatsState) => _state.average,
};

const actions = {
  setAverage({ commit }: IContext, value: Number) {
    commit('SET_AVERAGE', value);
  },
};

const mutations = {
  ['SET_AVERAGE'](_state: IStatsState, value: Number) {
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
