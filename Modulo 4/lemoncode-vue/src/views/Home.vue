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
import { memberDetailsRoute } from "@/router/routes";
import { Member } from "@/types/member";
import { defineComponent } from "vue";
import { selectedOrganisationService } from "../services/selectedOrganisation";
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
      selectedOrganisationService.setSelectedOrganisation(
        this.organisationName
      );
    },
    onMemberSelected(member: Member) {
      this.$router.push({
        name: memberDetailsRoute.name,
        params: memberDetailsRoute.buildParams(member.login),
      });
    },
  },
  created() {
    this.organisationName =
      selectedOrganisationService.getSelectedOrganisation() || "lemoncode";
  },
});
</script>
