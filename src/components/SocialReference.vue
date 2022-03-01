<template>
  <v-row class="d-flex justify-center">
    <v-btn @click="open">
      <v-icon left>{{ icon }}</v-icon>
      {{ label }}
    </v-btn>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SocialReference",
  components: {},
  props: {
    icon: {
      type: String,
      required: false,
      default: "",
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    link: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    open() {
      window.open(this.link, "_blank");
    },
  },
});
</script>
