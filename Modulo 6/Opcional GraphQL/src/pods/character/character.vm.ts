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
  id: 0,
  gender: '',
  image: '',
  name: '',
  status: '',
  species: '',
  type: '',
});
