import React from 'react';
import { NavLink, useResolvedPath, useMatch } from 'react-router-dom';
import Icon from '@mdi/react';

import classes from './NavLink.module.css';

const SidebarLink = ({ to, icon, activeIcon, title, style }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <div className={classes.container}>
      <NavLink
        to={to}
        className={`${classes.navButton} ${match ? classes.active : ''}`}
        title={title}
        style={style}
      >
        <Icon path={match ? activeIcon : icon} size={1} />
        <span>{title}</span>
      </NavLink>
    </div>
  );
};

export default SidebarLink;
