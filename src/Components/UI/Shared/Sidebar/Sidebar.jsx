import React from 'react';
import Icon from '@mdi/react';
import {
  mdiMusicBoxMultiple,
  mdiMusicBoxMultipleOutline,
  mdiPlaylistMusic,
  mdiPlaylistMusicOutline,
  mdiAlbum,
  mdiAccountMusic,
  mdiAccountMusicOutline,
  mdiLogoutVariant,
} from '@mdi/js';

import classes from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.navMainActions}>
        <li>
          <a href="/tracks" className={`${classes.navButton}`} title="Tracks">
            <Icon path={mdiMusicBoxMultipleOutline} size={1} />
            <span>Tracks</span>
          </a>
        </li>
        <li>
          <a
            href="/tracks"
            className={`${classes.navButton}`}
            title="Playlists"
          >
            <Icon path={mdiPlaylistMusicOutline} size={1} />
            <span>Playlists</span>
          </a>
        </li>
        <li>
          <a href="/tracks" className={`${classes.navButton}`} title="Albums">
            <Icon path={mdiAlbum} size={1} />
            <span>Albums</span>
          </a>
        </li>
        <li>
          <a
            href="/tracks"
            className={`${classes.navButton} ${classes.activeNav}`}
            title="Artists"
          >
            <Icon path={mdiAccountMusic} size={1} />
            Artists
          </a>
        </li>
      </ul>
      <button className={`${classes.navButton}`}>
        <Icon path={mdiLogoutVariant} size={1} />
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
