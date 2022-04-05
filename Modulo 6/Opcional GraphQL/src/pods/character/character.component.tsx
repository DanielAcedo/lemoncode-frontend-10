import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character: character, onSave } = props;

  const [name, setName] = React.useState(character.name);
  const [status, setStatus] = React.useState(character.status);

  const handleNameChange = (value: string) => {
    character.name = value;
    setName(value);
  };

  const handleStatusChange = (value: string) => {
    character.status = value;
    setStatus(value);
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
            disabled={true}
          />
          <TextFieldComponent
            name="status"
            label="Status"
            value={status}
            disabled={true}
          />
        </Form>
      )}
    </Formik>
  );
};
