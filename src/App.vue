<template>
  <v-app>
    <AppBar />
    <v-main app>
      <v-row>
        <v-col class="d-flex justify-center">
          <Header />
        </v-col>
      </v-row>
      <SocialReferences class="mt-8" :references="references" />
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
          <RepoMessage user="NoodleOfDeath" repo="home" />
          <SnapchatBitmoji />
        </v-col>
      </v-row>
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "./components/AppBar.vue";
import Header from "./components/Header.vue";
import SocialReferences from "./components/SocialReferences.vue";
import RepoMessage from "./components/RepoMessage.vue";
import Footer from "./components/Footer.vue";
import {
  mdiCoffee,
  mdiCubeOutline,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiSnapchat,
  mdiStackOverflow,
  mdiTwitter,
} from "@mdi/js";
import SnapchatBitmoji from "./assets/snapcodeBitmoji.svg";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
    Header,
    SocialReferences,
    RepoMessage,
    Footer,
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
          icon: mdiCubeOutline,
          label: "HackTheBox",
          link: "https://app.hackthebox.com/profile/639343",
        },
        {
          icon: mdiInstagram,
          label: "Instagram",
          link: "https://instagram.com/NoodleOfDeath",
        },
        {
          icon: mdiLinkedin,
          label: "LinkedIn",
          link: "https://linkedin.com/in/thommorgan",
        },
        {
          icon: mdiSnapchat,
          label: "Snapchat",
          graphic: SnapchatBitmoji,
        },
        {
          icon: mdiStackOverflow,
          label: "StackOverflow",
          link: "https://stackoverflow.com/users/409958/NoodleOfDeath",
        },
        {
          icon: mdiTwitter,
          label: "Twitter",
          link: "https://twitter.com/Cup_de_Noodle",
        },
      ],
      mdiCoffee,
      userTheme: "dark-theme",
      SnapchatBitmoji,
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
  overflow-x: hidden;
  width: 100%;
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
  margin-top: 56px;
  min-height: 600px;
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
.v-card > .v-card__title {
  word-break: normal;
}
</style>
