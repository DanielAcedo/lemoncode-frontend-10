import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { OrganisationSearch } from "../components/organisationSearch";
import { MemberEntity } from "../models/memberEntity.model";
import {
  getSavedOrganisationName,
  setSavedOrganisationName,
} from "../services/localStorage";
import { getMembersForOrganisation } from "../services/member.api";
import { css } from "@emotion/react";

const organisationSearchContainer = css`
  display: flex;
  justify-content: center;
`;

export const ListPage: React.FC = () => {
  const initialOrganisation = getSavedOrganisationName() || "lemoncode";

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organisationName, setOrganisationName] = useState(initialOrganisation);
  const [message, setMessage] = useState("");

  const onSearch = (newOrganisationName: string) => {
    setSavedOrganisationName(newOrganisationName);
    setOrganisationName(newOrganisationName);
  };

  const setMessageDependingOnResult = (members: MemberEntity[]) => {
    const newMessage =
      members.length === 0 ? "No members in this organisation" : "";

    setMessage(newMessage);
  };

  React.useEffect(() => {
    getMembersForOrganisation(organisationName).then((json) => {
      setMessageDependingOnResult(json);
      setMembers(json);
    });
  }, [organisationName]);

  const renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>
              <img src={member.avatar_url} style={{ width: "5rem" }} />
            </td>
            <td>
              <span>{member.id}</span>
            </td>
            <td>
              <Link to={generatePath("/detail/:id", { id: member.login })}>
                {member.login}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <div css={organisationSearchContainer}>
        <OrganisationSearch
          initialOrganisationName={organisationName}
          onSearch={onSearch}
        ></OrganisationSearch>
      </div>

      {!message && renderTable()}

      {message && <h4>{message}</h4>}
    </>
  );
};
