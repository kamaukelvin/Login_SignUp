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
import CxltToastr from 'cxlt-vue2-toastr'
import VeeValidate from 'vee-validate';



// toastr config
const toastrConfigs = {
  position: 'bottom right',
  showDuration: 5000,
  progressBar:true
}
// to enable us use a subscriber from the store
require("@/store/subscriber");

axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/https://yotemarket.co.ke/kev/";
Vue.use(BootstrapVue);
Vue.use(CxltToastr, toastrConfigs);
Vue.use(VeeValidate);


// this helps us use axios universally
window.axios = axios;


Vue.use(vuetify);

Vue.config.productionTip = false;
Vue.component('ValidationProvider');

  new Vue({
    router,
    store,
    vuetify,
 
    render: h => h(App)
  }).$mount("#app")


 




