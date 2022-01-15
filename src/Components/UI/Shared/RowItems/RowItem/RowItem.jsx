import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPencil, mdiDelete } from '@mdi/js';

import classes from './RowItem.module.css';

import Anchor from '../../Anchor/Anchor';
import Button from '../../Button/Button';

const RowItem = ({ id, image, name }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={classes.rowItem}>
      <div className={classes.rowContentsWrapper}>
        <Anchor to={`/artists/edit/${id}`} className={classes.imageContainer}>
          <img
            src={image}
            alt={name}
            width={40}
            height={40}
            className={`${classes.image} ${
              pathname.includes('artist') ? classes.circleImage : ''
            }`}
          />
        </Anchor>
        <div className={classes.itemNameContainer}>
          <Anchor to={`/artists/edit/${id}`}>{name}</Anchor>
        </div>
        <div className={classes.actionButtonsContainer}>
          <Button onClick={() => navigate(`/artists/edit/${id}`)}>
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
