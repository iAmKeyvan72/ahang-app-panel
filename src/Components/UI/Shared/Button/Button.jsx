import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  let classNames = [classes.btn];

  if (props.className?.includes('primary')) classNames.push(classes.primary);
  if (props.className?.includes('secondary'))
    classNames.push(classes.secondary);
  if (props.className?.includes('center')) classNames.push(classes.center);

  return (
    <button {...props} className={classNames.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
