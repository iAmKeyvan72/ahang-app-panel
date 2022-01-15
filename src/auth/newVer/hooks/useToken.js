import config from '../../config.json';

import Axios from 'axios';
import { useCallback, useEffect, useRef } from 'react';
import { configure } from 'axios-hooks';
import { useTokenExpiration } from './useTokenExpiration';

export const axios = Axios.create({
  baseURL: config.AUTH_BASE_URL,
});

export function useToken(onTokenInvalid, onRefreshRequired) {
  const accessToken = useRef();
  const { clearAutomaticTokenRefresh, setTokenExpiration } =
    useTokenExpiration(onRefreshRequired);

  const setToken = useCallback(
    ({ token_expiration, access_token }) => {
      accessToken.current = access_token;
      const expirationDate = new Date(token_expiration);
      setTokenExpiration(expirationDate);
    },
    [setTokenExpiration]
  );

  const isAuthenticated = useCallback(() => {
    return !!accessToken.current;
  }, []);

  const clearToken = useCallback(
    (shouldClearCookie = true) => {
      // if we came from a different tab, we should not clear the cookie again
      const clearRefreshTokenCookie = shouldClearCookie
        ? axios.get('Authentication/Error')
        : Promise.resolve();

      // clear refresh token
      return clearRefreshTokenCookie.finally(() => {
        // clear token
        accessToken.current = '';

        // clear auto refresh interval
        clearAutomaticTokenRefresh();
      });
    },
    [clearAutomaticTokenRefresh]
  );

  useEffect(() => {
    // add authorization token to each request
    axios.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${accessToken.current}`;
      return config;
    });

    // if the current token is expired or invalid, logout the user
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401 && accessToken.current) {
          clearToken();

          // let the app know that the current token was cleared
          onTokenInvalid();
        }
        return Promise.reject(error);
      }
    );

    // configure axios-hooks to use this instance of axios
    configure({ axios });
  }, [clearToken, onTokenInvalid]);

  return {
    clearToken,
    setToken,
    isAuthenticated,
  };
}
