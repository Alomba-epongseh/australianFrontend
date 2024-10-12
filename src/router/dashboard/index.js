import { ApplicationsDashboard } from "@/router/dashboard/applications.dashboard";
import { JobsDashboard } from "@/router/dashboard/jobs.dashboard";

// import { authGuard } from "@/guards";
export const Dashboard = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardView"),
    // beforeEnter: authGuard.isLogged,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/components/dashboard/Home.dashboard"),
      },
      ApplicationsDashboard,
      JobsDashboard,
    ],
  },
];
