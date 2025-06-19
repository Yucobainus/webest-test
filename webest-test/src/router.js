//Base Imports
import { createWebHistory, createRouter } from "vue-router";
//Components
import Catalog from "./components/Catalog.vue";
import Home from "./pages/Home.vue";
import Category from "./components/Category.vue";
import SubCategory from "./components/SubCategory.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/catalog/:category",
    name: "category",
    component: Category,
  },
  {
    path: "/catalog/:category/:subpath+",
    name: "Subcategory",
    component: SubCategory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
