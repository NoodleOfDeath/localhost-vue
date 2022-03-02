<template>
  <v-row class="d-flex justify-center">
    <v-menu top :close-on-click="true">
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="open" v-bind="attrs" v-on="on">
          <v-icon :left="label !== null && label !== undefined" v-if="icon">{{
            icon
          }}</v-icon>
          <span v-if="label !== null && label !== undefined">{{ label }}</span>
        </v-btn>
      </template>
      <v-row v-if="graphic !== null && graphic !== undefined" class="pa-5"
        ><img :src="graphic" width="150" class="pa-5" />
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
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: null,
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
