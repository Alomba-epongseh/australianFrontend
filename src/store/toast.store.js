const initialState = {
  severity: "",
  life: 0,
  title: "",
  message: "",
  closable: true,
};
const state = {
  toast: initialState,
};
const mutations = {
  displayToast(state, payload) {
    return (state.toast = payload);
  },
  hideToast(state) {
    return (state.toast = initialState);
  },
};

const actions = {
  displayToast(ctx, payload) {
    ctx.commit("displayToast", payload);
  },
  hideToast(ctx) {
    ctx.commit("hideToast");
  },
};

const getters = {
  getToastState(state) {
    return state.toast;
  },
};

export default { getters, actions, mutations, state };
