<template>
  <div class="home">
    <organisation-search
      :organisation-name="organisationName"
      @search="onSearch"
    />
    <member-list
      :organisation-name="organisationName"
      @memberSelected="onMemberSelected"
    />
  </div>
</template>

<script lang="ts">
import { Member } from "@/types/member";
import { defineComponent } from "vue";
import MemberList from "../components/MemberList.vue";
import OrganisationSearch from "../components/OrganisationSearch.vue";

export default defineComponent({
  name: "Home",
  components: {
    MemberList,
    OrganisationSearch,
  },
  data: () => ({
    organisationName: "",
  }),
  methods: {
    onSearch(organisationName: string) {
      this.organisationName = organisationName;
      localStorage.setItem("selectedOrganization", this.organisationName);
    },
    onMemberSelected(member: Member) {
      this.$router.push({
        name: "MemberDetails",
        params: { name: member.login },
      });
    },
  },
  created() {
    this.organisationName =
      localStorage.getItem("selectedOrganization") || "lemoncode";
  },
});
</script>
