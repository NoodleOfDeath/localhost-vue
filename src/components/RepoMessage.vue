<template>
  <v-card>
    <v-card-title>
      You can view the Vue.js + Vuetify source code and CircleCI CI/CD
      configuration of this single page web application on my
      GitHub:
    </v-card-title>
    <v-card-text>
      <a :href="`https://github.com/${user}/${repo}`" target="_blank">{{
        `https://github.com/${user}/${repo}`
      }}</a>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * TODO: Make this component actually fetch the code from a
 * particular repo and let you "carousel" through the code
 */
export default Vue.extend({
  name: "RepoMessage",
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
});
</script>
