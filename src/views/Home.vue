<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-row>
        <v-col class="d-flex justify-center">
          <Header />
        </v-col>
      </v-row>
      <v-row id="subcontent-container" class="mt-12">
        <v-col
          v-for="(ref, i) in references"
          :key="i"
          v-bind="props"
        >
          <SocialReference
            :icon="ref.icon"
            :label="ref.label"
            :link="ref.link"
            :graphic="ref.graphic"
          />
        </v-col>
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
import AppBar from "../components/AppBar.vue";
import Header from "../components/Header.vue";
import SocialReference from "../components/SocialReference.vue";
import RepoMessage from "../components/RepoMessage.vue";
import Footer from "../components/Footer.vue";
import {
  mdiCoffee,
  mdiCubeOutline,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiMusicNoteOutline,
  mdiNpm,
  mdiSnapchat,
  mdiStackOverflow,
  mdiTwitter,
} from "@mdi/js";
import SnapcodeBitmoji from "../assets/snapcodeBitmoji.svg";

export default Vue.extend({
  name: "Home",
  components: {
    AppBar,
    Header,
    SocialReference,
    RepoMessage,
    Footer,
  },
  data() {
    return {
      tabs: null,
      props: {
        cols: 12,
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
      },
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
          icon: mdiMusicNoteOutline,
          label: "TikTok",
          link: "https://tiktok.com/@noodleofdeath",
        },
        {
          icon: mdiTwitter,
          label: "Twitter",
          link: "https://twitter.com/nftofdeath",
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
  src: url("../assets/DMMono-Regular.ttf");
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  width: 100%;
}

.v-application,
.v-main,
.v-card {
  background-image: -webkit-radial-gradient(
    center top,
    circle farthest-corner,
    var(-v-background-base, #000) 0%,
    var(--v-backround-base-lighten1, #eee) 100%
  ) !important;
  background-image: radial-gradient(
    circle farthest-corner at center top,
    var(-v-background-base, #000) 0%,
    var(--v-backround-base-lighten1, #eee) 100%
  ) !important;
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
  max-width: 600px;
  margin: auto;
}

.v-main,
.v-card {
  text-align: center;
  justify-content: center;
}

.v-main {
  min-height: 600px;
  width: 100vw;
  display: flex;
}

.v-card {
  padding: 2rem 4rem;
  border-radius: 4px;
  width: 100%;
}

.v-card > .v-card__title,
.v-card > .v-card__text {
  word-break: normal;
  justify-content: center;
}

.v-card > .v-card__text {
  font-size: 1em;
}

button.v-btn {
  max-width: 200px;
  width: 100%;
  animation: hue-rotate 10s linear infinite;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
}

button.v-btn::before,
button.v-btn::after {
  background: #ff1f71;
  box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
    0 0 60px #ff1f71;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: hue-rotate(0);
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
