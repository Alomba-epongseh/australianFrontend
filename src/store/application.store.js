import { ipcService } from "@/services";
import { AppEventsConstant } from "@/constants";
import router from "@/router";
// import router from "@/router";
const state = {
  applications: [],
  applicationsMetaData: {},
};

const mutations = {
  setApplication(state, payload) {
    return state.applications.push(payload);
  },
  setApplications(state, { data, metaData }) {
    state.applications = data;
    state.applicationsMetaData = metaData;
    return true;
  },
  updateApplication(state, payload) {
    return state.applications.map((application) => {
      if (payload.applicationIds.includes(application.id)) {
        application = {
          ...application,
          payload,
        };
      }
      delete application["applicationIds"];
    });
  },
};

const actions = {
  addApplication(ctx, payload) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.APPLICATION.ADD}`,
        "POST",
        payload
      )
      .then((res) => {
        ctx.commit("setApplication", res);
        ctx.commit("displayModal", {
          severity: "success",
          title: "Successs",
          message:
            "Application submitted successfully. We will get back to you when you are selected.",
          action: {
            name: "Back to jobs",
            method: () => router.back(),
          },
        });
      });
  },
  getAllApplications(ctx, payload = { skip: 0, take: 10 }) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.APPLICATION.GET_ALL}/?skip=${payload.skip}&take=${payload.take}`,
        "GET"
      )
      .then((res) => {
        if (res && "data" in res && "metaData" in res) {
          ctx.commit("setApplications", {
            data: res.data,
            metaData: res.metaData,
          });
        }
      });
  },
  updateApplication(ctx, payload) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.APPLICATION.UPDATE}`,
        "PUT",
        payload
      )
      .then(() => {
        ctx.commit("updateApplication", payload);
        router.push(`/dashboard/applications`);
        ctx.commit("displayToast", {
          severity: "success",
          life: 3000,
          title: "Successs",
          message: "Application updated",
          closable: true,
        });
      });
  },
};

const getters = {
  getApplicationsState(state) {
    return state.applications;
  },
  getSingleApplication: (state) => (id) => {
    return state.applications.find((application) => application.id === id);
  },
  getApplicationsMetadata(state) {
    return state.applicationsMetaData;
  },
};

export default { state, mutations, actions, getters };
