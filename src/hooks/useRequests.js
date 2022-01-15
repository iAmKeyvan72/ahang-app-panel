import config from '../config.json';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import useAuthAxios from './useAuthAxios';

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
  BEFORE: 'before',
};

const useRequests = (url) => {
  const api = useAuthAxios();
  const params = useParams();

  const limit = config.pagination.limit;

  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState(null);

  const getArchiveData = async (page = 0) => {
    try {
      const response = await api.get(url, {
        params: {
          offset: page * limit,
          limit,
        },
      });
      console.log(response.data);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      return response.data;
    } catch (error) {
      setError(error);
      setRequestStatus(REQUEST_STATUS.FAILED);
    }
  };

  const getSingleData = async () => {
    try {
      const response = await api.get(url, {
        params: {
          artistId: params.id,
        },
      });
      console.log(response.data);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
      return response.data;
    } catch (error) {
      setError(error);
      setRequestStatus(REQUEST_STATUS.FAILED);
    }
  };

  const insertRecord = async (record, doneCallback) => {
    try {
      const response = await api.post(url, record, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (doneCallback) {
        doneCallback();
      }
      return response;
    } catch (error) {
      console.log('error thrown inside delayedFunc', error);
      if (doneCallback) {
        doneCallback();
      }
      return record;
    }
  };

  const getRecord = async () => {
    try {
      if (!params.id) {
        setRequestStatus(REQUEST_STATUS.FAILED);
        throw Error('Artist not found');
      }
      const response = await api.get(process.env.REACT_APP_ARTISTS + params.id);
      setData(response.data);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
    } catch (error) {
      setError(error);
      setRequestStatus(REQUEST_STATUS.FAILED);
    }
  };

  return {
    data,
    requestStatus,
    error,
    getArchiveData,
    getSingleData,
    insertRecord,
  };
};

export default useRequests;
