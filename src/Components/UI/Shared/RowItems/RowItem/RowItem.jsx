import React from 'react';
import Icon from '@mdi/react';
import { mdiPencil, mdiDelete } from '@mdi/js';

import classes from './RowItem.module.css';

import Anchor from '../../Anchor/Anchor';
import Button from '../../Button/Button';

const RowItem = (props) => {
  return (
    <div className={classes.rowItem}>
      <div className={classes.rowContentsWrapper}>
        <Anchor to="/editArtist" className={classes.imageContainer}>
          <img
            src="/assets/images/imagePlaceholders/artistsPlaceholder.png"
            alt="Artist Name"
            width={40}
            height={40}
            className={classes.image}
          />
        </Anchor>
        <div className={classes.itemNameContainer}>
          <Anchor to="/editArtists">Ahmad Azad</Anchor>
        </div>
        <div className={classes.actionButtonsContainer}>
          <Button onClick={() => console.log('edit clicked')}>
            <Icon path={mdiPencil} color="var(--background-700)" size={0.8} />
          </Button>
          <Button onClick={() => console.log('delete clicked')}>
            <Icon path={mdiDelete} color="var(--error)" size={0.8} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RowItem;
