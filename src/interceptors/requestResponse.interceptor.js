import axios from "axios";
import store from "@/store";
import { AppEventsConstant } from "@/constants";
class RequestResponseInterceptor {
  requestInterceptor() {
    return axios.interceptors.request.use(
      (config) => {
        if (["post", "put", "put", "patch"].includes(config.method)) {
          store.dispatch("showLoader", { type: "spinner", isActive: true });
        } else {
          store.dispatch("showLoader", { type: "skeleton", isActive: true });
        }

        return config;
      },
      (error) => {
        store.dispatch("hideLoader");
        Promise.reject(error).finally(() => store.dispatch("hideLoader"));
      }
    );
  }

  responseInterceptor() {
    return axios.interceptors.response.use(
      (response) => {
        if (
          response &&
          response?.config.method !== "get" &&
          [
            AppEventsConstant.USERS.LOGIN,
            AppEventsConstant.USERS.CREATE,
          ].includes(response?.request.url)
        ) {
          store.dispatch("hideLoader").then(() => {
            store.dispatch("displayModal", {
              severity: "success",
              title: "Success",
              message: "Action successful",
              action: {
                name: "Continue",
                method: () => store.dispatch("hideModal"),
              },
            });
          });
        } else {
          store.dispatch("hideLoader");
        }
        return response;
      },
      (error) => {
        store.dispatch("hideLoader").then(() => {
          store.dispatch("displayToast", {
            severity: "error",
            life: 3000,
            title: "Error",
            message:
              error?.response?.data?.message ??
              "An error occurred. Please try again latter ",
            closable: false,
          });
        });
      }
    );
  }
}

export const requestResponseInterceptors = {
  requestInterceptor: () =>
    new RequestResponseInterceptor().requestInterceptor(),
  responseInterceptor: () =>
    new RequestResponseInterceptor().responseInterceptor(),
};
