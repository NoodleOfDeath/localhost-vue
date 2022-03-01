<template>
  <v-row class="d-flex justify-center">
    <v-col
      v-for="(ref, i) in references"
      :key="i"
      cols="12"
      xs="12"
      sm="6"
      lg="2"
      class="mb-5"
    >
      <SocialReference :icon="ref.icon" :label="ref.label" :link="ref.link" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import SocialReference from "./SocialReference.vue";

export default Vue.extend({
  name: "SocialReferences",
  components: {
    SocialReference,
  },
  props: {
    references: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {};
  },
});
</script>
