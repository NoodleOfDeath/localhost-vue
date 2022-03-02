<template>
  <v-footer padless color="primary lighten-1">
    <v-row class="d-flex justify-center white--text" no-gutters>
      {{ new Date().getFullYear() }} — NoodleOfDeath
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  components: {},
  data() {
    return {
      icons: ["mdi-letter"],
    };
  },
});
</script>
