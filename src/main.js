/* eslint-disable prettier/prettier */
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


// this helps us use axios universally
window.axios = axios;


Vue.use(vuetify);
Vue.config.productionTip = false;

store.dispatch('auth/validateToken', sessionStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app")
})

 




