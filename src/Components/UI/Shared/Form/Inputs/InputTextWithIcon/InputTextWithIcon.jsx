import React from 'react';
import { useField } from 'formik';

import classes from './InputTextWithIcon.module.css';

import Icon from '@mdi/react';

const InputTextWithIcon = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  let icon;
  if (props.icon === 'en') {
    icon = <span className={`${classes.flag} ${classes.enFlag}`}></span>;
  } else if (props.icon === 'fa') {
    icon = <span className={`${classes.flag} ${classes.faFlag}`}></span>;
  } else {
    icon = <Icon size={1} color="var(--text-placeholder)" path={props.icon} />;
  }

  const errored = meta.touched && meta.error;

  return (
    <div>
      <div
        className={`${classes.inputWrapper} ${
          errored ? classes.inputErrored : ''
        }`}
        style={props.style}
      >
        <i>{icon}</i>
        <input {...field} {...props} className={classes.inputTextStyle} />
      </div>
      {errored ? <div className={classes.error}>{meta.error}</div> : null}
    </div>
  );
};

export default InputTextWithIcon;
