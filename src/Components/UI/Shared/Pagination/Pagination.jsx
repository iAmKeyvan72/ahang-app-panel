import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Anchor from '../Anchor/Anchor';

import classes from './Pagination.module.css';

const Pagination = () => {
  const params = useParams();
  const { pathname } = useLocation();

  const currentPage = params.page ? params.page : 1;
  const prevPage = +currentPage !== 1 ? +currentPage - 1 : null;
  const nextPage = +currentPage + 1;

  let archiveBaseUrl = pathname;

  let prevPageUrl;

  if (currentPage > 1) {
    archiveBaseUrl = pathname.replace(`/page/${currentPage}`, '');
    prevPageUrl = archiveBaseUrl;
  }

  if (currentPage > 2) {
    prevPageUrl = archiveBaseUrl + '/page/' + prevPage;
  }

  return (
    <div className={classes.container}>
      {params.page > 1 ? (
        <Anchor to={prevPageUrl} className="secondary">
          Previous
        </Anchor>
      ) : null}

      <Anchor to={archiveBaseUrl + '/page/' + nextPage} className="secondary">
        Next
      </Anchor>
    </div>
  );
};

export default Pagination;
