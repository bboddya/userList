import type { ActionContext, CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex';

export type User = {
  name: string;
  id: number;
};

export type State = {
  userList: User[];
};

export enum MutationTypes {
  DEL_USER = 'DEL_USER'
}
export type Mutations<S = State> = {
  [MutationTypes.DEL_USER](state: S, payload: number): void;
};

export enum ActionTypes {
  DEL_USER = 'DEL_USER'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.DEL_USER]({ commit }: AugmentedActionContext, payload: number): void;
}

export type Store = Omit<VuexStore<State>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
};

export type Getters = {
  getUserList(state: State): User[];
};
