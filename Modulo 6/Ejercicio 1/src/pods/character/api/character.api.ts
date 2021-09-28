import { Character } from './character.api-model';
import { Lookup } from 'common/models';

export const getCharacter = async (id: string): Promise<Character> => {
  return {} as Character;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveHotel = async (character: Character): Promise<boolean> => {
  return true;
};
