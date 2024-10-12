import { ipcService } from "@/services";
import { AppEventsConstant } from "@/constants";
const state = {
  users: [],
  usersMetaData: {},
};

const mutations = {
  setUser(state, payload) {
    return state.users.push(payload);
  },
  setUsers(state, { data, metaData }) {
    state.users = data;
    state.usersMetaData = metaData;
    return true;
  },
  updateUser(state, payload) {
    return state.users.map((user) => {
      if (payload.userIds.includes(user.id)) {
        user = {
          ...user,
          payload,
        };
      }
      delete user["userIds"];
    });
  },
};

const actions = {
  // addUser(ctx, payload) {
  //   ipcService
  //     .handleReq(
  //       `${AppEventsConstant.BASE_URL}${AppEventsConstant.USERS.CREATE}`,
  //       "POST",
  //       payload
  //     )
  //     .then((res) => {
  //       ctx.commit("setUser", res);
  //     });
  // },
  getAllUsers(ctx, payload = { skip: 0, take: 10 }) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.USERS.GET_ALL}/?skip=${payload.skip}&take=${payload.take}`,
        "GET"
      )
      .then((res) => {
        if (res && "data" in res && "metaData" in res) {
          ctx.commit("setUsers", { data: res.data, metaData: res.metaData });
        }
      });
  },
  updateUser(ctx, payload) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.USERS.UPDATE}`,
        "PUT",
        payload
      )
      .then(() => {
        ctx.commit("updateUser", payload);
      });
  },
};

const getters = {
  getUsersState(state) {
    return state.users;
  },
  getSingleUser: (state) => (userId) => {
    return state.users.find(({ id }) => id === userId);
  },
  getUsersMetadata(state) {
    return state.usersMetaData;
  },
};

export default { state, mutations, actions, getters };
