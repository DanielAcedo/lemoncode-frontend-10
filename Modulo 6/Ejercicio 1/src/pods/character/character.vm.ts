export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: -1,
  gender: '',
  image: '',
  name: '',
  status: '',
  species: '',
  type: '',
});
