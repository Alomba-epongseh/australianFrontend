export const AuthRoute = {
  path: "/auth",
  name: "auth",
  component: () => import("@/views/Auth.view"),
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("@/components/auth/Login"),
    },
    {
      path: "register",
      name: "register",
      component: () => import("@/components/auth/Register"),
    },
  ],
};
