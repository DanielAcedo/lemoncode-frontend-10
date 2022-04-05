import { Character } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql-client';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query {
      character(id: ${id}) {
        id,
        name,
        status
      }
    }
  `;
  return graphQLClient
    .request<GetCharacterResponse>(query)
    .then((res) => res.character);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return Promise.resolve(true);
};
