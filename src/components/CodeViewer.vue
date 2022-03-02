<template>
  <v-card>
    <v-card-title
      >You can view the Vue.js + Vuetify source code of this website on my
      GitHub: </v-card-title
    ><v-card-text>
      <a :href="`https://github.com/${user}/${repo}`" target="_blank">{{
        `https://github.com/${user}/${repo}`
      }}</a>
      <!-- <v-tabs v-model="tabs">
        <v-tab v-for="(file, i) in files" :key="i">
          {{ file.name }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <v-tab-item v-for="(file, i) in files" :key="i">
          {{ file.code }}
        </v-tab-item>
      </v-tabs-items> -->
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import GitHubClient from "../types/GitHubClient";

/**
 * TODO: Make this component actually fetch the code from a
 * particular repo and let you "carousel" through the code
 */
export default Vue.extend({
  name: "CodeViewer",
  components: {},
  props: {
    user: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tabs: null,
      files: [],
    };
  },
  mounted() {
    const github = new GitHubClient(this.user, this.repo);
    const files = github.fetchFiles();
  },
});
</script>
