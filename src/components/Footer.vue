<template>
  <v-footer color="primary" class="pa-10">
    <v-row class="d-flex justify-center">
      {{ new Date().getFullYear() }} NoodleOfDeath
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
});
</script>
