import { authGuard } from "@/guards";

export const JobRoute = {
  path: "/:userId",
  name: "mainJob",
  children: [
    {
      path: "jobs",
      name: "jobs",
      beforeEnter: authGuard.isLogged,
      component: () => import("@/views/jobs/listView.vue"),
    },
    {
      path: "jobs/details/:jobId",
      name: "jobDetail",
      beforeEnter: authGuard.isLogged,
      component: () => import("@/views/jobs/detailsView.vue"),
    },
  ],
};
