<template>
  <v-row class="d-flex justify-center">
    <v-menu top :close-on-click="true">
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="open" v-bind="attrs" v-on="on">
          <v-icon left>{{ icon }}</v-icon>
          {{ label }}
        </v-btn>
      </template>
      <v-row v-if="graphic" class="pa-5"
        ><img v-if="graphic" :src="graphic" width="150" class="pa-5" />
      </v-row>
    </v-menu>
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
      default: null,
    },
    graphic: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    open() {
      if (this.link) window.open(this.link, "_blank");
    },
  },
});
</script>
