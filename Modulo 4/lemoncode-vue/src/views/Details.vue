<template>
  <div class="wrapper">
    <img
      :src="member.avatar_url"
      alt="avatar of user {{member.login}}"
      srcset=""
    />
    <h2><span>User:</span> {{ member.login }}</h2>
    <h2><span>Name:</span> {{ member.name }}</h2>
    <h2><span>Location:</span> {{ member.location || "Unknown" }}</h2>

    <router-link class="back-link" to="/">Go back to organisations</router-link>
  </div>
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

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back-link {
  margin-top: 2em;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
}

img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: 3px solid tomato;
}
</style>
