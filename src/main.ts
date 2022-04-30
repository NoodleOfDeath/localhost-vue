import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
  watch: {
    $route: {
      immediate: true,
      handler(to, _) {
        document.title = to.meta.title || "NoodleOfDeath";
      },
    },
  },
}).$mount("#app");
