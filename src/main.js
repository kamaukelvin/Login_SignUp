import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

// to enable us use a subscriber from the store
require("@/store/subscriber");

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
Vue.use(BootstrapVue);

// re-authenticating user automatically using token stored in localStorage to avoid logging in again incase user refreshes page
store.dispatch("auth/validateToken", localStorage.getItem("token"));

// this helps us use axios universally
window.axios = axios;


Vue.use(vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
