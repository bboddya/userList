import {
  ActionTypes,
  MutationTypes,
  type Actions,
  type Getters,
  type Mutations,
  type State,
  type Store,
} from '@/types';
import { createStore, type GetterTree, type MutationTree, type ActionTree } from 'vuex';

const state: State = {
  userList: [
    {
      name: 'Ella',
      id: 1,
    },
    {
      name: 'Deni',
      id: 2,
    },
    {
      name: 'Oli',
      id: 3,
    },
    {
      name: 'Ella',
      id: 4,
    },
    {
      name: 'Deni',
      id: 5,
    },
    {
      name: 'Oli',
      id: 6,
    },
    {
      name: 'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
      id: 7,
    },
  ],
};

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.DEL_USER](state: State, payload: number) {
    state.userList = state.userList.filter(user => user.id !== payload);
  },
};

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.DEL_USER]({ commit }, payload: number) {
    commit(MutationTypes.DEL_USER, payload);
  },
};

export const getters: GetterTree<State, State> & Getters = {
  getUserList: (state) => state.userList,
};

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export function useStore() {
  return store as Store;
}
