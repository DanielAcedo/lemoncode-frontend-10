import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteHotel } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateHotel = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: number) => {
    await deleteHotel(id);
    loadCharacterCollection();
  };

  console.log(characterCollection);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
