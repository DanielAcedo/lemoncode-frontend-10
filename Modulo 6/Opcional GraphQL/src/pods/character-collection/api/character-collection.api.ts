import { CharacterEntityApi } from './character-collection.api-model';
import { CharacterCollectionApiResponse } from './character-collection-response.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql-client';

interface GetCharactersResponse {
  characters: CharacterCollectionApiResponse;
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        results {
          id
          name
          status
          species
          gender
          image
          origin {
            name
          }
        }
      }
    }
  `;

  return graphQLClient
    .request<GetCharactersResponse>(query)
    .then((res) => res.characters.results);
};

export const deleteHotel = async (id: number): Promise<boolean> => {
  return Promise.resolve(true);
};
