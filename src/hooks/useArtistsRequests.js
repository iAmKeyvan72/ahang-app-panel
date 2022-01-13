import { useState, useEffect } from 'react';
import axios from 'axios';

const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};

const restUrl = 'http://88.99.21.190:8001/api/v1/Artists/';

const useRequests = () => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(restUrl);
        setData(response.data);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      } catch (error) {
        setError(error);
        setRequestStatus(REQUEST_STATUS.FAILED);
      }
    };

    getData();
  }, []);

  const insertRecord = async (record, doneCallback) => {
    try {
      const response = await axios.post(restUrl, record, {
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

  return { data, requestStatus, error, insertRecord };
};

export default useRequests;
