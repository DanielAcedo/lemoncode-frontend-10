import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';
import { CharacterCollectionApiResponse } from './character-collection-response.api-model';

const characterApiBase: string = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  return axios
    .get<CharacterCollectionApiResponse>(`${characterApiBase}`)
    .then((res) => res.data.results);
};

export const deleteHotel = async (id: number): Promise<boolean> => {
  return true;
};
