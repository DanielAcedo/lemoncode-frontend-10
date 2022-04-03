import { IconButton } from '@material-ui/core';
import React from 'react';
import { TextFieldComponent } from '../text-field';
import {
  addButtonStyle,
  labelStyle,
  textRowStyle,
} from './text-list-field.styles';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  name: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export const TextListFieldComponent = (props: Props) => {
  const { name, value, onChange } = props;
  const [textList, setTextList] = React.useState(value || []);

  React.useEffect(() => setTextList(value || []), [value]);

  const handleTextListChange = (value: string, index: number) => {
    textList[index] = value;
    setTextList([...textList]);
    onChange(textList);
  };

  const addNewText = () => {
    setTextList([...textList, '']);
  };

  const removeText = (index: number) => {
    textList.splice(index, 1);
    setTextList([...textList]);
  };

  return (
    <>
      <label className={labelStyle}>{name}</label>
      {textList.map((text, i) => (
        <div key={i.toString()} className={textRowStyle}>
          <TextFieldComponent
            value={text}
            onChange={(ev) => handleTextListChange(ev.target.value, i)}
          ></TextFieldComponent>
          <IconButton onClick={() => removeText(i)}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </div>
      ))}
      <div className={addButtonStyle}>
        <IconButton onClick={addNewText}>
          <AddRoundedIcon></AddRoundedIcon>
        </IconButton>
      </div>
    </>
  );
};
