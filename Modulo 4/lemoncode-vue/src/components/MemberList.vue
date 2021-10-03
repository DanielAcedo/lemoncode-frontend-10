<template>
  <h1 class="organisation-name">{{ organisationName }}</h1>
  <div class="user-list-container">
    <div v-if="message">{{ message }}</div>
    <div
      class="user-card"
      v-for="member in memberList"
      :key="member.id"
      @click="userClick(member)"
    >
      <h3>{{ member.login }}</h3>
      <img :src="member.avatar_url" alt="avatar of user {{member.login}}" />
    </div>
  </div>
</template>

<script lang="ts">
import { Member } from "@/types/member";
import { defineComponent } from "vue";
import { memberService } from "../services/members";

export default defineComponent({
  props: {
    organisationName: {
      type: String,
      default: "",
    },
  },
  emits: ["memberSelected"],
  data: () => ({
    memberList: [] as Member[],
    message: "" as string,
  }),
  methods: {
    search(organisationName: string) {
      this.message = "";

      return memberService
        .getMembersForOrganisation(organisationName)
        .then((data) => {
          this.memberList = data;
        })
        .catch(() => {
          this.memberList = [];
          this.message = "No members found for this organisation";
        });
    },
    userClick(member: Member) {
      this.$emit("memberSelected", member);
    },
  },
  created() {
    this.search(this.organisationName);
  },
  watch: {
    organisationName(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.search(newValue);
      }
    },
  },
});
</script>

<style lang="scss">
.organisation-name {
  text-align: center;
}

.user-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.user-card {
  border: 1px solid gray;
  padding: 0 1.2em 0.75em 1em;
  margin-bottom: 1em;
  transition: transform ease-in-out 0.2s;
  box-shadow: 0px 1px 5px;
  border-radius: 10px;
  background-color: white;

  img {
    height: 200px;
    width: 200px;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    bottom: 20px;
  }
}
</style>
