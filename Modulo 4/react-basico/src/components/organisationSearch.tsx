import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { css } from "@emotion/react";

const container = css`
  display: flex;
  align-items: center;
`;

interface Props {
  initialOrganisationName?: string;
  onSearch: (organisationName: string) => void;
}

export const OrganisationSearch: React.FC<Props> = (props: Props) => {
  const { onSearch, initialOrganisationName } = props;
  const [organisationName, setOrganisationName] = useState("");

  const onClick = () => onSearch(organisationName);

  useEffect(() => {
    setOrganisationName(initialOrganisationName);
  }, [initialOrganisationName]);

  return (
    <div css={container}>
      <TextField
        value={organisationName}
        onChange={(e) => setOrganisationName(e.target.value)}
      />
      <Button onClick={onClick}>Search</Button>
    </div>
  );
};
