import React from 'react';
import { Outlet } from 'react-router-dom';
import { mdiAccountPlus, mdiAccountPlusOutline, mdiLogin } from '@mdi/js';

import classes from './AuthenticationLayout.module.css';

import SidebarLink from '../../Components/UI/Shared/Sidebar/NavLink/NavLink';

const AuthenticationLayout = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.tabsWrapper}>
        <div className={classes.tabsContainer}>
          <SidebarLink
            to={'/login'}
            title="Login"
            icon={mdiLogin}
            activeIcon={mdiLogin}
          />
          <SidebarLink
            to={'/signup'}
            title="Signup"
            icon={mdiAccountPlusOutline}
            activeIcon={mdiAccountPlus}
          />
        </div>
      </div>
      <div className={classes.contentsWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
