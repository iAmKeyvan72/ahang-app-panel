import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiPlus } from '@mdi/js';

import classes from './AllArtists.module.css';

import RowItem from '../Shared/RowItems/RowItem/RowItem';
import Anchor from '../Shared/Anchor/Anchor';
import { Outlet } from 'react-router-dom';

const AllArtists = (props) => {
  return (
    <div className={classes.contentsWrapper}>
      <div className={classes.header}>
        <div className={classes.searchBarWrapper}>
          {/* <InputTextWithIcon
            icon={mdiMagnify}
            id="searchbar"
            name="searchbar"
            type="search"
          /> */}
        </div>
        <Anchor to="new" title="new" className="primary">
          <Icon path={mdiPlus} size={1} />
          New Artist
        </Anchor>
      </div>

      <div className={classes.container}>
        <RowItem />
        <RowItem />
        <RowItem />
        <RowItem />
        <RowItem />
        <RowItem />
        <RowItem />
      </div>
      <Outlet />
    </div>
  );
};

export default AllArtists;
