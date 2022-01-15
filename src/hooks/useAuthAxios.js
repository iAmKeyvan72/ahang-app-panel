import { useContext } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

import { AuthContext } from '../Context/AuthContext';

const useAuthAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_CORE_BASE_URL,
    headers: {
      Authorization: `Bearer ${authTokens.accessToken}`,
    },
  });

  authAxios.interceptors.request.use(async (req) => {
    const user = jwt_decode(authTokens.accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      return req;
    }

    const response = await axios.post(
      process.env.REACT_APP_AUTH_REFRESH_TOKEN,
      {
        refreshToken: authTokens.refreshToken,
        clientId: process.env.REACT_APP_CLIENT_ID,
        appPackageName: process.env.REACT_APP_APP_PACKAGE_NAME,
      }
    );
    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.accessToken));

    req.headers.Authorization = `Bearer ${response.data.accessToken}`;

    return req;
  });

  return authAxios;
};

export default useAuthAxios;
