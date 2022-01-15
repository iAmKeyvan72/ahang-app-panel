import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './MainWrapper.module.css';

const MainWrapper = (props) => {
  return <Outlet />;
};

export default MainWrapper;
