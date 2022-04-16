<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-row>
        <v-col class="d-flex justify-center">
          <Header />
        </v-col>
      </v-row>
      <v-row id="subcontent-container" class="mt-8">
        <SocialReferences :references="references" />
      </v-row>
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
          <RepoMessage user="NoodleOfDeath" repo="127.0.0.1" />
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
  mdiNpm,
  mdiSnapchat,
  mdiStackOverflow,
  mdiTwitter,
} from "@mdi/js";
import SnapcodeBitmoji from "./assets/snapcodeBitmoji.svg";

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
      tabs: null,
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
          icon: mdiNpm,
          label: "NPM",
          link: "https://www.npmjs.com/~noodleofdeath",
        },
        {
          icon: mdiSnapchat,
          label: "Snapchat",
          graphic: SnapcodeBitmoji,
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
    };
  },
  methods: {
    buyCoffee() {
      window.open("https://buymeacoffee.com/NoodleOfDeath", "_blank");
    },
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "DM Mono";
  src: url("./assets/DMMono-Regular.ttf");
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  width: 100%;
}

a,
.v-application,
.v-main,
.v-btn,
.v-card,
.v-card__text,
.v-footer {
  font-family: "DM Mono", "Courier New" !important;
  color: #00ff00 !important;
}

#subcontent-container {
  max-width: 800px;
  margin: auto;
}

.v-main {
  min-height: 600px;
  width: 100vw;
  display: flex;
  text-align: center;
  justify-content: center;
}

.v-card {
  padding: 2rem 4rem;
  text-align: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
}

.v-card > .v-card__title {
  word-break: normal;
  justify-content: center;
}
</style>
