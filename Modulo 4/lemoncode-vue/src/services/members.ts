import axios from "axios";
import { Member } from "../types/member";

const githubUrlBase = "https://api.github.com";

export const memberService = {
  getMembersForOrganisation(organisationName: string): Promise<Member[]> {
    return axios
      .get<Member[]>(`${githubUrlBase}/orgs/${organisationName}/members`)
      .then((res) => res.data);
  },
  getMember(name: string): Promise<Member> {
    return axios
      .get<Member>(`${githubUrlBase}/users/${name.toString()}`)
      .then((res) => res.data);
  },
};
