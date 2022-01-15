import React from 'react';
import { Outlet } from 'react-router-dom';
import { mdiArrowLeft } from '@mdi/js';

import classes from './AddNewItemLayout.module.css';

import Anchor from '../../Components/UI/Shared/Anchor/Anchor';
import Icon from '@mdi/react';

const AddNewItemLayout = () => {
  return (
    <div className={classes.contentsWrapper}>
      <div className={classes.header}>
        <Anchor to=".." title="back" className="secondary">
          <Icon path={mdiArrowLeft} size={1} />
          Back
        </Anchor>
      </div>
      <Outlet />
    </div>
  );
};

export default AddNewItemLayout;
