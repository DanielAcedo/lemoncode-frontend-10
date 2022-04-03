export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ResourceLocation;
  location: ResourceLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ResourceLocation {
  name: string;
  url: string;
}
