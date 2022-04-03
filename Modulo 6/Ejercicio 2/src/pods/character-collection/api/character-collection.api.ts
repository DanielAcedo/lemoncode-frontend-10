import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const characterApiBase: string = 'http://localhost:3000/api/characters';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  return axios
    .get<CharacterEntityApi[]>(`${characterApiBase}`)
    .then((res) => res.data);
};

export const deleteHotel = async (id: number): Promise<boolean> => {
  return true;
};
