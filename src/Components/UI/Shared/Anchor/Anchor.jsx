import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Anchor.module.css';

const Anchor = (props) => {
  let classNames = [classes.btn];

  if (props.className === 'primary') classNames.push(classes.primary);
  if (props.className === 'secondary') classNames.push(classes.secondary);

  return (
    <Link {...props} className={classNames.join(' ')}>
      {props.children}
    </Link>
  );
};

export default Anchor;
