import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { apolloProvider } from "./apollo";

import "./assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  i18n,
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount("#app");
