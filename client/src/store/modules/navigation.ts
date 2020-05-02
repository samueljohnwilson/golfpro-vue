import { IContext } from '../types';

const DEFAULT_DRAWER = false;

interface INavigationState {
  drawer: Boolean;
}

const state: INavigationState = {
  drawer: DEFAULT_DRAWER,
};

const getters = {
  drawer: (_state: INavigationState) => _state.drawer,
};

const actions = {
  openDrawer({ commit }: IContext) {
    commit('SET_DRAWER', true);
  },
  closeDrawer({ commit }: IContext) {
    commit('SET_DRAWER', false);
  }
};

const mutations = {
  ['SET_DRAWER'](_state: INavigationState, isOpen: Boolean) {
    _state.drawer = isOpen;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
