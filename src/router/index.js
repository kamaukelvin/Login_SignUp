/* eslint-disable no-console */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
// import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters["auth/getAuthentication"]) {
    //     return next({
    //       name: "Login"
    //     });
    //   }
    // }
  },

  // ensure that the login route accepts props to be able to access the success message after registering
  {
    path: "/login",
    name: "Login",
    props: true,
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  // redirect incase user types navigates to a wrong path route
  {
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
