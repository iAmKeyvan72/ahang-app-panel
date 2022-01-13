import React from 'react';

import classes from './InputTextWithLabelAndIcon.module.css';

import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';

const InputTextWithLabelAndIcon = ({
  id,
  name,
  placeholder,
  icon,
  label,
  direction,
}) => {
  return (
    <div
      className={`${classes.inputWithLabel} ${
        direction === 'rtl' ? classes.rtlSupport : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <InputTextWithIcon
        id={id}
        name={name}
        placeholder={placeholder}
        icon={icon}
      />
    </div>
  );
};

export default InputTextWithLabelAndIcon;
