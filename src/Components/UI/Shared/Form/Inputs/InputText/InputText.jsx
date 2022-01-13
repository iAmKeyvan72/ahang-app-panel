import React from 'react';
import { useField } from 'formik';

import classes from './InputText.module.css';

const InputText = (props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={classes.inputTextStyle}
        style={props.style}
      />{' '}
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputText;
