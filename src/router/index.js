import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
