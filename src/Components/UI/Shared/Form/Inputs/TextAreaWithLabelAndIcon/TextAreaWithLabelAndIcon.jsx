import React from 'react';

import classes from './TextAreaWithLabelAndIcon.module.css';

import TextAreaWithIcon from '../TextAreaWithIcon/TextAreaWithIcon';

const TextAreaWithLabelAndIcon = ({
  id,
  name,
  placeholder,
  icon,
  label,
  direction,
  rows,
  cols,
}) => {
  return (
    <div
      className={`${classes.inputWithLabel} ${
        direction === 'rtl' ? classes.rtlSupport : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <TextAreaWithIcon
        id={id}
        name={name}
        placeholder={placeholder}
        icon={icon}
        rows={rows}
        cols={cols}
      />
    </div>
  );
};

export default TextAreaWithLabelAndIcon;
