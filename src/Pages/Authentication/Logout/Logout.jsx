import React, { useContext, useEffect } from 'react';

import classes from './Logout.module.css';

import { AuthContext } from '../../../Context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, [logout]);

  return <div>logging out</div>;
};

export default Logout;
