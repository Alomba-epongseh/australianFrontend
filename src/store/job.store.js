import { ipcService } from "@/services";
import { AppEventsConstant } from "@/constants";
import router from "@/router";
// import router from "@/router";
const state = {
  jobs: [],
  jobsMetaData: {},
};

const mutations = {
  setJob(state, payload) {
    return state.jobs.push(payload);
  },
  setJobs(state, { data, metaData }) {
    state.jobs = data;
    state.jobsMetaData = metaData;
    return true;
  },
  updateJob(state, payload) {
    return state.jobs.map((job) => {
      if (payload.jobIds.includes(job.id)) {
        job = {
          ...job,
          payload,
        };
      }
      delete job["jobIds"];
    });
  },
};

const actions = {
  addJob(ctx, payload) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.JOBS.ADD}`,
        "POST",
        payload
      )
      .then((res) => {
        ctx.commit("setJob", res);
        ctx.commit("displayModal", {
          severity: "success",
          title: "Successs",
          message: "Job added",
          action: {
            name: "Back to jobs",
            method: () => router.push(`/dashboard/jobs`),
          },
        });
      });
  },
  getAllJobs(ctx, payload = { skip: 0, take: 10 }) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.JOBS.GET_ALL}/?skip=${payload.skip}&take=${payload.take}`,
        "GET"
      )
      .then((res) => {
        if (res && "data" in res && "metaData" in res) {
          ctx.commit("setJobs", { data: res.data, metaData: res.metaData });
        }
      });
  },
  updateJob(ctx, payload) {
    ipcService
      .handleReq(
        `${AppEventsConstant.BASE_URL}${AppEventsConstant.JOBS.UPDATE}`,
        "PUT",
        payload
      )
      .then(() => {
        ctx.commit("updateJob", payload);
        router.push(`/dashboard/jobs`);
        ctx.commit("displayToast", {
          severity: "success",
          life: 3000,
          title: "Successs",
          message: "Job updated",
          closable: true,
        });
      });
  },
};

const getters = {
  getJobsState(state) {
    return state.jobs;
  },
  getSingleJob: (state) => (id) => {
    return state.jobs.find((job) => job.id === id);
  },
  getJobsMetadata(state) {
    return state.jobsMetaData;
  },
};

export default { state, mutations, actions, getters };
