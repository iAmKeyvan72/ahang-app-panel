import React from 'react';

import classes from './Anchor.module.css';

const Anchor = (props) => {
  let classNames = [classes.btn];

  if (props.className === 'primary') classNames.push(classes.primary);
  if (props.className === 'secondary') classNames.push(classes.secondary);

  return (
    <a {...props} className={classNames.join(' ')}>
      {props.children}
    </a>
  );
};

export default Anchor;
