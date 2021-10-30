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

const mapToActorResponse = (res) => {
  const response = <ActorResponse>res;

  if (!response.results) response.results = [];
  else {
    response.results = res.results.map(
      (item) =>
        <ActorEntity>{
          id: item.id,
          gender: item.gender,
          imageUrl: item.image,
          location: item.location.name,
          name: item.name,
          species: item.species,
          status: item.status,
        }
    );
  }

  return response;
};
