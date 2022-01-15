import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMagnify, mdiPlus } from '@mdi/js';

import classes from './ArchivePage.module.css';

import RowItem from '../../Components/UI/Shared/RowItems/RowItem/RowItem';
import Anchor from '../../Components/UI/Shared/Anchor/Anchor';
import Pagination from '../../Components/UI/Shared/Pagination/Pagination';

import useRequests, { REQUEST_STATUS } from '../../hooks/useRequests';

const ArchivePage = ({ type, endpoint }) => {
  const [data, setData] = useState([]);

  const params = useParams();
  const { getArchiveData } = useRequests(endpoint);

  useEffect(() => {
    const fetchAsyncData = async () => {
      const response = await getArchiveData(params.page);
      setData(response);
    };
    fetchAsyncData();
  }, [params.page]);

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
        <Anchor to={`/${type}/new`} title="new" className="primary">
          <Icon path={mdiPlus} size={1} />
          New {type}
        </Anchor>
      </div>

      <div className={classes.container}>
        {REQUEST_STATUS === REQUEST_STATUS.LOADING ? (
          <div>Loading</div>
        ) : (
          data.map((item) => (
            <RowItem
              key={item[`${type}Id`]}
              id={item[`${type}Id`]}
              name={item.name.english}
              image={item.image.rawImage}
            />
          ))
        )}
      </div>

      <Pagination />
    </div>
  );
};

export default ArchivePage;
