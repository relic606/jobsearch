import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ApplicationsView from "../views/ApplicationsView.vue";
import ArchiveView from "../views/ArchiveView.vue";
import SavedView from "../views/SavedView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		},
		{
			path: "/applications",
			name: "applications",
			component: ApplicationsView
		},
		{
			path: "/saved",
			name: "saved",
			component: SavedView
		},
		{
			path: "/archive",
			name: "archive",
			component: ArchiveView
		}
	]
});

export default router;
