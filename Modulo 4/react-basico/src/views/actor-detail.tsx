import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorEntity } from "../models/actorEntity.model";
import { getActor } from "../services/rick-and-morty/actors.api";
import { css } from "@emotion/react";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const imageStyle = css`
  flex-grow: 0;
  flex-shrink: 4;
`;

interface RouteParams {
  id: string;
}

const ActorDetailPage = () => {
  const { id } = useParams<RouteParams>();
  const [actor, setActor] = useState<ActorEntity>();

  useEffect(() => {
    getActor(id).then((res) => {
      setActor(res);
    });
  }, [id]);

  const renderActorDetails = () => (
    <div css={containerStyle}>
      <img css={imageStyle} src={actor.imageUrl} />
      <Typography fontWeight="bold" variant="h5">
        {actor.name}
      </Typography>
      <Typography>Status: {actor.status}</Typography>
      <Typography>Species: {actor.species}</Typography>
      <Typography>Location: {actor.location}</Typography>
    </div>
  );

  return <>{actor ? renderActorDetails() : <div>Loading...</div>}</>;
};

export default ActorDetailPage;
