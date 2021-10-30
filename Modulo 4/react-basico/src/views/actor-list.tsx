import React, { useEffect, useState } from "react";
import ActorSearch from "../components/actorSearch";
import ActorSearchPreview from "../components/actorSearchPreview";
import { ActorEntity } from "../models/actorEntity.model";
import {
  getAllActors,
  getFilteredActors,
} from "../services/rick-and-morty/actors.api";
import { css } from "@emotion/react";
import Pagination from "@mui/material/Pagination";
import { generatePath, useHistory } from "react-router-dom";
import { actorDetailRoute } from "../routes";

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const paginationStyle = css`
  margin-top: 1em;

  ul {
    justify-content: center;
  }
`;

const actorListContainerStyle = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
`;

function ActorListPage() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [actors, setActors] = useState<ActorEntity[]>([]);

  const history = useHistory();

  useEffect(() => {
    getAllActors(page).then((res) => {
      setActors(res.results);
      setTotalPages(res.info?.pages || 0);
    });
  }, [page]);

  const onPageChange = (event: React.ChangeEvent, page: number) => {
    setPage(page);
  };

  const onSearchChange = (searchFilter: string) => {
    getFilteredActors(searchFilter).then((res) => {
      setActors(res.results);
      setTotalPages(res.info?.pages || 0);
    });
  };

  const onActorClick = (actor: ActorEntity) => {
    history.push(generatePath(actorDetailRoute.path, { id: actor.id }));
  };

  return (
    <div css={container}>
      <ActorSearch onSearch={onSearchChange}></ActorSearch>

      {actors?.length > 0 && (
        <>
          <Pagination
            css={paginationStyle}
            count={totalPages}
            page={page}
            onChange={onPageChange}
          />
          <div css={actorListContainerStyle}>
            {actors.map((actor) => (
              <ActorSearchPreview
                actor={actor}
                key={actor.id}
                onClick={onActorClick}
              ></ActorSearchPreview>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ActorListPage;
