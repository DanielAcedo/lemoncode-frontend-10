import { ActorEntity } from "./actorEntity.model";

export interface ActorResponse {
  info: ResponseInfo;
  results: ActorEntity[];
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
