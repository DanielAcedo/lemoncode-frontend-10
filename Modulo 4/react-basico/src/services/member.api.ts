import { MemberEntity } from "../models/memberEntity.model";

export const getMembersForOrganisation = (
  organisationName: string
): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${organisationName}/members`).then(
    (response) => (response.ok ? response.json() : [])
  );
};
