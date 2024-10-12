const initialState = {
  severity: "",
  title: "",
  message: "",
  action: {
    name: "",
    method: () => null,
  },
};

const state = {
  modal: initialState,
};
const mutations = {
  displayModal(state, payload) {
    return (state.modal = payload);
  },
  hideModal(state) {
    return (state.modal = initialState);
  },
};

const actions = {
  displayModal(ctx, payload) {
    ctx.commit("displayModal", payload);
  },
  hideModal(ctx) {
    ctx.commit("hideModal");
  },
};

const getters = {
  getModalState(state) {
    return state.modal;
  },
};

export default { getters, actions, mutations, state };
