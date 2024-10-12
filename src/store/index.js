import { createStore } from "vuex";
import LoadersStore from "@/store/loaders.store";
import ToastStore from "@/store/toast.store";
import ModalStore from "@/store/modal.store";
import UsersStore from "@/store/users.store";
import authStore from "./auth.store";
import jobStore from "./job.store";
import applicationStore from "./application.store";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LoadersStore,
    ToastStore,
    ModalStore,
    UsersStore,
    authStore,
    jobStore,
    applicationStore,
  },
});
