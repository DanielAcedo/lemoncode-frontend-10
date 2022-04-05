import { CharacterEntityApi } from './character-collection.api-model';
import { ResponseInfo } from './response-info.api-model';

export interface CharacterCollectionApiResponse {
  info: ResponseInfo;
  results: CharacterEntityApi[];
}
