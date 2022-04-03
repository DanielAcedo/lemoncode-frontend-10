import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { TextListFieldComponent } from 'common/components/form/text-list/text-list-field.component';
interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character: character, onSave } = props;

  const [name, setName] = React.useState(character.name);
  const [status, setStatus] = React.useState(character.status);
  const [bestSentences, setBestSentences] = React.useState(
    character?.bestSentences ?? []
  );

  React.useEffect(() => {
    setName(character.name);
    setStatus(character.status);
    setBestSentences(character.bestSentences);
  }, [character]);

  const handleNameChange = (value: string) => {
    character.name = value;
    setName(value);
  };

  const handleStatusChange = (value: string) => {
    character.status = value;
    setStatus(value);
  };

  const handleBestSentenceChange = (value: string[]) => {
    character.bestSentences = value;
    setBestSentences(value);
  };

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            value={name}
            onChange={(ev) => handleNameChange(ev.target.value)}
          />
          <TextFieldComponent
            name="status"
            label="Status"
            value={status}
            onChange={(ev) => handleStatusChange(ev.target.value)}
          />
          <TextListFieldComponent
            name="Best sentences"
            value={bestSentences}
            onChange={handleBestSentenceChange}
          ></TextListFieldComponent>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
