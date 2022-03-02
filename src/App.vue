<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <AppBar />
    </v-app-bar>
    <v-main>
      <Header />
      <SocialReferences class="mt-5" :references="references" />
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn @click="buyCoffee" color="primary">
            <v-icon left>{{ mdiCoffee }}</v-icon>
            Buy me a Coffee!
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <CodeViewer user="NoodleOfDeath" repo="home" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "./components/AppBar.vue";
import Header from "./components/Header.vue";
import SocialReferences from "./components/SocialReferences.vue";
import CodeViewer from "./components/CodeViewer.vue";
import {
  mdiCoffee,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiStackOverflow,
} from "@mdi/js";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
    Header,
    SocialReferences,
    CodeViewer,
  },
  data() {
    return {
      references: [
        {
          icon: mdiGithub,
          label: "GitHub",
          link: "https://github.com/NoodleOfDeath",
        },
        {
          icon: mdiInstagram,
          label: "Instagram",
          link: "https://instagram.com/NoodleOfDeath",
        },
        {
          icon: mdiLinkedin,
          label: "Linked-In",
          link: "https://linkedin.com/in/thommorgan",
        },
        {
          icon: mdiStackOverflow,
          label: "StackOverflow",
          link: "https://stackoverflow.com/users/409958/NoodleOfDeath",
        },
      ],
      mdiCoffee,
      userTheme: "dark-theme",
    };
  },
  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
  methods: {
    buyCoffee() {
      window.open("https://buymeacoffee.com/NoodleOfDeath", "_blank");
    },
    setTheme(theme: string) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    getMediaPreference(): string {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return hasDarkPreference ? "dark-theme" : "light-theme";
    },
  },
});
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}

.v-main {
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  padding: 2rem 4rem;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}
</style>
