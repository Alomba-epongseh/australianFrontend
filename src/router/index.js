import { createRouter, createWebHashHistory } from "vue-router";
import { MainRoute } from "./main.route";
import { JobRoute } from "./job.route";
import { Dashboard } from "./dashboard";
import { AuthRoute } from "./auth.route";
// all our modules are lazy loaded.
const routes = [MainRoute, JobRoute, ...Dashboard, AuthRoute];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

// exploit the knowledge of lazy loading and hash routes.
export default router;
