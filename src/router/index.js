import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArchiveView from "../views/ArchiveView.vue";
import SavedView from "../views/SavedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/projects/jobsearch",
      name: "home",
      component: HomeView,
      props: true,
    },
    {
      path: "/projects/jobsearch/saved",
      name: "saved",
      component: SavedView,
      props: true,
    },
    {
      path: "/projects/jobsearch/archive",
      name: "archive",
      component: ArchiveView,
      props: true,
    },
  ],
});

export default router;
