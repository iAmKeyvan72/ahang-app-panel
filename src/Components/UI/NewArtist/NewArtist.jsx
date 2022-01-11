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
  mdiArrowLeft,
  mdiClose,
  mdiPlus,
  mdiLogoutVariant,
  mdiPencil,
  mdiDelete,
  mdiMagnify,
} from '@mdi/js';
import { Formik, Field, Form } from 'formik';

import classes from './NewArtist.module.css';

const NewArtist = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.navMainActions}>
          <a href="/tracks" className={classes.navButton} title="Tracks">
            <Icon path={mdiMusicBoxMultipleOutline} size={1.2} />
            Tracks
          </a>
          <a href="/tracks" className={classes.navButton} title="Playlists">
            <Icon path={mdiPlaylistMusicOutline} size={1.2} />
            Playlists
          </a>
          <a href="/tracks" className={classes.navButton} title="Albums">
            <Icon path={mdiAlbum} size={1.2} />
            Albums
          </a>
          <a href="/tracks" className={classes.navButton} title="Artists">
            <Icon path={mdiAccountMusic} size={1.2} />
            Artists
          </a>
        </div>
        <button className={classes.navButton}>
          <Icon path={mdiLogoutVariant} />
          Log out
        </button>
      </div>
      <div className={classes.mainWrapper}>
        <div className={classes.header}>
          <a href="/artists" title="artists" className={classes.back}>
            <Icon path={mdiArrowLeft} size={1.2} />
            All Artists
          </a>
        </div>
        <div className={classes.contentsWrapper}>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                enName: '',
                faName: '',
                isIllegal: false,
                isBand: false,
                bandArtists: [],
                profilePic: '',
                enDescription: '',
                faDescription: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 2000));
                alert(JSON.stringify(values, null, 10));
              }}
            >
              <Form>
                <label htmlFor="enName">Artist's name (english)</label>
                <Field
                  id="enName"
                  name="enName"
                  placeholder="Artist's name in english"
                />

                <label htmlFor="faName">نام خواننده (فارسی)</label>
                <Field
                  id="faName"
                  name="faName"
                  placeholder="نام خواننده به فارسی"
                />

                <label htmlFor="isIllegal">
                  <Field type="checkbox" id="isIllegal" name="isIllegal" /> This
                  is Illegal.
                </label>

                <label htmlFor="isBand">
                  <Field type="checkbox" id="isBand" name="isBand" /> This is a
                  Band.
                </label>

                <button type="submit">Submit Artist</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArtist;
