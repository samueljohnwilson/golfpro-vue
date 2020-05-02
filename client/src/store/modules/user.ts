import { IContext } from '../types';

const DEFAULT_USER = null;

interface IUser {
  name: string;
  id: number;
}

interface IUserState {
  user: IUser | null;
}

const state: IUserState = {
  user: DEFAULT_USER,
};

const getters = {
  user: (_state: IUserState) => _state.user,
};

const actions = {
  setUser({ commit }: IContext, user: IUser) {
    commit('SET_USER', user);
  },
};

const mutations = {
  ['SET_USER'](_state: IUserState, user: IUser) {
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
