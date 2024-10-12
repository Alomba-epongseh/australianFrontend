export const AppEventsConstant = {
  JOBS: {
    ADD: "api/jobs/create",
    GET_ALL: "api/jobs",
    UPDATE: "api/jobs/update",
  },
  USERS: {
    CREATE: "api/users/create",
    GET_ALL: "api/users/get",
    UPDATE: "api/users/update",
    LOGIN: "api/users/login",
    GET_CART: "api/users/getcarts",
    CART: {
      ADD: "api/users/:userId/cart/add",
      DELETE: "api/users/:userId/cart/delete",
    },
    APPLICATION: {
      ADD: "api/applications/create",
      GET_ALL: "api/applications",
      GET_SINGLE: "api/applications/get/:id",
      UPDATE: "api/applications/update",
    },
  },
  APPLICATION: {
    ADD: "api/applications/create",
    GET_ALL: "api/applications",
    GET_SINGLE: "api/applications/get/:id",
    UPDATE: "api/applications/update",
  },
  FILE_UPLOAD: {
    MULTIPLE: "api/upload/images",
  },
  BASE_URL: "http://localhost:8000/",
};
