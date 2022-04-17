import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#000",
        secondary: "#2d2d30",
        background: "#1e1e1e",
        text: "#00ff00",
        anchor: "#00ff00",
        accent: "#3f3f3f",
      },
    },
    options: {
      customProperties: true,
      variations: true,
    },
  },
});
