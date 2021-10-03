<template>
  <div class="wrapper">
    <input class="input" type="text" v-model="editedOrganisationName" />
    <button @click="onSearch">Search users</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    organisationName: String,
  },
  data: () => ({ editedOrganisationName: "" }),
  emits: ["search"],
  methods: {
    onSearch() {
      this.$emit("search", this.editedOrganisationName);
    },
  },
  created() {
    this.editedOrganisationName = this.organisationName as string;
  },
});
</script>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

.input {
  margin-right: 1.2em;
}
</style>
