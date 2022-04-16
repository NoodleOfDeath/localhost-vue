<template>
  <v-footer padless color="primary">
    <v-row class="d-flex justify-center" no-gutters>
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
    return {};
  },
});
</script>
