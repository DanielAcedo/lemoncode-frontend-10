import { Character } from './character.api-model';
import Axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:3000/api/characters/';

export const getCharacter = async (id: string): Promise<Character> => {
  return Axios.get<Character>(baseUrl + id).then((res) => res.data);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  let apiCall: Promise<AxiosResponse> = null;

  if (character.id > 0) {
    apiCall = Axios.put(baseUrl + character.id, character);
  } else {
    apiCall = Axios.post(baseUrl, character);
  }

  return apiCall.then((res) => res.status >= 200 && res.status < 300);
};
