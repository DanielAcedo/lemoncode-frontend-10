import React, { useEffect, useState } from "react";
import Search from "@mui/icons-material/Search";
import { ChangeEvent } from "react-router/node_modules/@types/react";
import { css } from "@emotion/react";
import { Icon, InputAdornment, OutlinedInput } from "@mui/material";
import useDebounce from "../hooks/useDebounce";

const containerStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const inputStyle = css`
  width: 300px;
`;

interface Props {
  onSearch: (searchFilter: string) => void;
}

const ActorSearch: React.FC<Props> = (props: Props) => {
  const { onSearch } = props;
  const [searchFilter, setSearchFilter] = useState("");
  const debouncedSearchFilter = useDebounce(searchFilter, 500);

  const onSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  useEffect(() => {
    onSearch?.(debouncedSearchFilter);
  }, [debouncedSearchFilter]);

  return (
    <div css={containerStyle}>
      <OutlinedInput
        type="text"
        css={inputStyle}
        value={searchFilter}
        onChange={onSearchText}
        endAdornment={
          <InputAdornment position="end">
            <Icon>
              <Search />
            </Icon>
          </InputAdornment>
        }
      ></OutlinedInput>
    </div>
  );
};

export default ActorSearch;
