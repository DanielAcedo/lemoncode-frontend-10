<template>
  <h2>{{ member.login }}</h2>
  <h2>{{ member.name }}</h2>
  <h2>{{ member.location }}</h2>
</template>

<script lang="ts">
import { Member } from "@/types/member";
import { defineComponent } from "vue";
import { memberService } from "../services/members";

export default defineComponent({
  data: () => ({
    memberName: "" as string,
    member: {} as Member,
  }),
  created() {
    this.memberName = this.$route.params.name as string;
    memberService
      .getMember(this.memberName)
      .then((data) => (this.member = data));
  },
});
</script>

<style></style>
