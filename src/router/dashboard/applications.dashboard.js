export const ApplicationsDashboard = {
  path: "applications",
  name: "mainApplicationEntry",
  component: () => import("@/components/dashboard/applications/Main.vue"),
  children: [
    {
      path: "",
      name: "listApplication",
      component: () => import("@/components/dashboard/applications/List.vue"),
    },
    {
      path: "add",
      name: "addApplication",
      component: () => import("@/components/dashboard/applications/Add.vue"),
    },
    {
      path: "edit/:id",
      name: "editApplication",
      component: () => import("@/components/dashboard/applications/Edit.vue"),
    },
    {
      path: ":id",
      name: "detailApplication",
      component: () => import("@/components/dashboard/applications/Detail.vue"),
    },
  ],
};
