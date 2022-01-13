import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Layout.module.css';

import Sidebar from '../UI/Shared/Sidebar/Sidebar';

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.mainWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
