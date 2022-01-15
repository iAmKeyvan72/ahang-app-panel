import React from 'react';

import classes from './InputTextWithLabelAndIcon.module.css';

import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';

const InputTextWithLabelAndIcon = ({
  id,
  name,
  placeholder,
  icon,
  label,
  style,
  direction,
}) => {
  return (
    <div
      className={`${classes.inputWithLabel} ${
        direction === 'rtl' ? classes.rtlSupport : ''
      }`}
      style={style}
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
