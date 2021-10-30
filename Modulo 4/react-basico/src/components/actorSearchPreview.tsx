import React from "react";
import { ActorEntity } from "../models/actorEntity.model";
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";

interface Props {
  actor: ActorEntity;
  onClick?: (actor: ActorEntity) => void;
}

const containerStyle = css`
  margin: 0.5em;
  max-width: 300px;
`;

const ActorSearchPreview: React.FC<Props> = (props: Props) => {
  const { actor, onClick } = props;

  const onActorClick = () => {
    onClick?.(actor);
  };

  return (
    <Card css={containerStyle}>
      <CardActionArea onClick={onActorClick}>
        <CardMedia
          component="img"
          height="300"
          width="250"
          image={actor.imageUrl}
        ></CardMedia>
        <CardContent>
          <Typography variant="h6">{actor.name}</Typography>
          <Typography>{actor.status}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActorSearchPreview;
