export type Dispatch = Function;
export type Getters = Function;
export type Commit = Function;
export type RootGetters = Function;

export interface IContext {
  dispatch: Dispatch;
  getters: Getters;
  commit: Commit;
  rootGetters: RootGetters;
}
