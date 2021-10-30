import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
}

const ActorDetailPage = () => {
  const { id } = useParams<RouteParams>();
  const parsedId = parseInt(id);

  return <div>Test {parsedId}</div>;
};

export default ActorDetailPage;
