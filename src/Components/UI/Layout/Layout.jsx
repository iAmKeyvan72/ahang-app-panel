import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import classes from './Layout.module.css';

import Anchor from '../Shared/Anchor/Anchor';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.mainWrapper}>
        <div className={classes.header}>
          <Anchor href="/artists" title="artists" className="secondary">
            <Icon path={mdiArrowLeft} size={1} />
            All Artists
          </Anchor>
        </div>

        <div className={classes.contentsWrapper}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
