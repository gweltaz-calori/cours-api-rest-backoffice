import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import AppDashboard from "../pages/AppDashboard.vue";
import AppDashboardRestaurants from "../pages/AppDashboardRestaurants.vue";
import AppDashboardCreateRestaurant from "../pages/AppDashboardCreateRestaurant.vue";

function requireAuth(to, from, next) {
  if (!localStorage.getItem("accessToken")) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}

function requireAnonymous(to, from, next) {
  if (localStorage.getItem("accessToken")) {
    next({
      path: "/",
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
  { path: "/login", component: Login, beforeEnter: requireAnonymous },
  { path: "/register", component: Register, beforeEnter: requireAnonymous },
  {
    path: "/dashboard",
    component: AppDashboard,
    beforeEnter: requireAuth,
    redirect: "/dashboard/restaurants",
    children: [
      { path: "restaurants", component: AppDashboardRestaurants },
      { path: "restaurants/create", component: AppDashboardCreateRestaurant },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
