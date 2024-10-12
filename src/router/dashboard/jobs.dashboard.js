export const JobsDashboard = {
  path: "job",
  name: "mainJobsEntry",
  component: () => import("@/components/dashboard/jobs/Main.vue"),
  children: [
    {
      path: "",
      name: "listOfJobs",
      component: () => import("@/components/dashboard/jobs/List.vue"),
    },
    {
      path: ":id",
      name: "jobDetails",
      component: () => import("@/components/dashboard/jobs/Detail.vue"),
    },
    {
      path: "add",
      name: "addJob",
      component: () => import("@/components/dashboard/jobs/Add.vue"),
    },
    // {
    //   path: "edit/:id",
    //   name: "editJob",
    //   component: () => import("@/components/dashboard/jobs/Edit.vue"),
    // },
  ],
};
