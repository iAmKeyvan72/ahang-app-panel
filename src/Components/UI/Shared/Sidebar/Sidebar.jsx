import React from 'react';
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
import SidebarLink from './NavLink/NavLink';

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.navMainActions}>
        <SidebarLink
          to={'/tracks'}
          title="Tracks"
          icon={mdiMusicBoxMultipleOutline}
          activeIcon={mdiMusicBoxMultiple}
        />
        <SidebarLink
          to={'/playlists'}
          title="Playlists"
          icon={mdiPlaylistMusicOutline}
          activeIcon={mdiPlaylistMusic}
        />
        <SidebarLink
          to={'/albums'}
          title="Albums"
          icon={mdiAlbum}
          activeIcon={mdiAlbum}
        />
        <SidebarLink
          to={'/artists'}
          title="Artists"
          icon={mdiAccountMusicOutline}
          activeIcon={mdiAccountMusic}
        />
      </div>

      <SidebarLink
        to={'/logout'}
        title="Log out"
        icon={mdiLogoutVariant}
        activeIcon={mdiLogoutVariant}
      />
    </div>
  );
};

export default Sidebar;
