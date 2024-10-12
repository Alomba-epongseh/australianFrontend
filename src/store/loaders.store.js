const state = {
  loader: {
    type: "",
    isActive: false,
  },
};
const mutations = {
  showLoader(state, payload) {
    return (state.loader = { type: payload.type, isActive: payload.isActive });
  },
  hideLoader(state) {
    return (state.loader = { type: "", isActive: false });
  },
};
const actions = {
  showLoader(ctx, payload) {
    ctx.commit("showLoader", payload);
  },
  hideLoader(ctx) {
    ctx.commit("hideLoader");
  },
};
const getters = {
  getLoaderState(state) {
    return state.loader;
  },
};

export default { state, actions, mutations, getters };
