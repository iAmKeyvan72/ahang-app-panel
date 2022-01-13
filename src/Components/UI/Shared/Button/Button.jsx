import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  let classNames = [classes.btn];

  if (props.className === 'primary') classNames.push(classes.primary);
  if (props.className === 'secondary') classNames.push(classes.secondary);

  return (
    <button {...props} className={classNames.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
