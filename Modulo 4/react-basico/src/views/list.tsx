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
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

const organisationSearchContainer = css`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

export const ListPage: React.FC = () => {
  const initialOrganisation = getSavedOrganisationName() || "lemoncode";

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organisationName, setOrganisationName] = useState(initialOrganisation);
  const [message, setMessage] = useState("");

  const [page, setPage] = useState(0);

  const rowsPerPage = 5;

  const onSearch = (newOrganisationName: string) => {
    setPage(0);
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

  const onPageChange = (event, page: number) => {
    setPage(page);
  };

  const renderTableMaterial = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <img src={member.avatar_url} style={{ width: "5rem" }} />
                </TableCell>
                <TableCell>{member.id}</TableCell>
                <TableCell>
                  <Link to={generatePath("/detail/:id", { id: member.login })}>
                    {member.login}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={members.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onPageChange}
              rowsPerPageOptions={[]}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );

  return (
    <>
      <div css={organisationSearchContainer}>
        <OrganisationSearch
          initialOrganisationName={organisationName}
          onSearch={onSearch}
        ></OrganisationSearch>
      </div>

      {!message && renderTableMaterial()}

      {message && <h4>{message}</h4>}
    </>
  );
};
