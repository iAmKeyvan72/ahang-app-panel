import React from 'react';
import { useField } from 'formik';

import classes from './TextAreaWithIcon.module.css';

import Icon from '@mdi/react';

const TextAreaWithIcon = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  let icon;
  if (props.icon === 'en') {
    icon = <span className={`${classes.flag} ${classes.enFlag}`}></span>;
  } else if (props.icon === 'fa') {
    icon = <span className={`${classes.flag} ${classes.faFlag}`}></span>;
  } else {
    icon = <Icon size={1} color="var(--text-placeholder)" path={props.icon} />;
  }

  return (
    <div className={classes.inputWrapper}>
      <i>{icon}</i>
      <textarea
        {...field}
        {...props}
        className={classes.inputTextStyle}
        style={props.style}
      />
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextAreaWithIcon;
