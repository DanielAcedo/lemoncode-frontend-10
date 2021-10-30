import { fetchJson } from "../../helper/fetchHelper";
import { ActorEntity } from "../../models/actorEntity.model";
import { ActorResponse } from "../../models/actorResponse.model";

const baseUrl: string = "https://rickandmortyapi.com/api";

export const getAllActors = (page: number = 1): Promise<ActorResponse> =>
  fetchJson(`${baseUrl}/character?page=${page}`).then((res) =>
    mapToActorResponse(res)
  );

export const getFilteredActors = (
  searchFilter: string
): Promise<ActorResponse> =>
  fetchJson(`${baseUrl}/character?name=${searchFilter}`).then((res) =>
    mapToActorResponse(res)
  );

export const getActor = (id: string): Promise<ActorEntity> =>
  fetchJson(`${baseUrl}/character/${id}`).then(mapToActorEntity);
const mapToActorResponse = (res) => {
  const response = <ActorResponse>res;

  if (!response.results) response.results = [];
  else {
    response.results = res.results.map(mapToActorEntity);
  }

  return response;
};

const mapToActorEntity = (apiActor) =>
  <ActorEntity>{
    id: apiActor.id,
    gender: apiActor.gender,
    imageUrl: apiActor.image,
    location: apiActor.location.name,
    name: apiActor.name,
    species: apiActor.species,
    status: apiActor.status,
  };
