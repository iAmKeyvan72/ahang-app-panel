import { useCallback, useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { useNavigate } from 'react-router';
import { axios, useToken } from './hooks/useToken';
import { AuthEvents } from './services/AuthEvents';

function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const refreshToken = useCallback(refresh, []);

  const onTokenInvalid = () => setUser(null);
  const { setToken, clearToken, isAuthenticated } = useToken(
    onTokenInvalid,
    refreshToken
  );

  useEffect(() => {
    // try to get new token on first render using refresh token
    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
    // add listener for login or logout from other tabs
    window.addEventListener('storage', async (event) => {
      if (event.key === AuthEvents.LOGOUT && isAuthenticated()) {
        await clearToken(false);
        setUser(null);
      } else if (event.key === AuthEvents.LOGIN) {
        refreshToken();
      }
    });
  }, [clearToken, isAuthenticated, refreshToken]);

  const logout = useCallback(() => {
    clearToken().finally(() => {
      setUser(null);
      navigate('login');

      // fire an event to logout from all tabs
      window.localStorage.setItem(AuthEvents.LOGOUT, new Date().toISOString());
    });
  }, [navigate, clearToken]);

  const register = useCallback(
    async (userToRegister) => {
      const {
        data: { user, ...rest },
      } = await axios.post('Users', userToRegister);
      setUser(user);
      setToken(rest);
    },
    [setToken]
  );

  const login = useCallback(
    async (username, password) => {
      const {
        data: { user, ...rest },
      } =
        (await axios.post('Authentication/Username'),
        {
          username,
          password,
        });
      setUser(user);
      setToken(rest);

      // fire an event to let all tabs know they should login
      window.localStorage.setItem(AuthEvents.LOGIN, new Date().toISOString());
    },
    [setToken]
  );

  async function refresh() {
    const {
      data: { user, ...rest },
    } = await axios.post('Authentication/RefreshToken');

    setUser(user);
    setToken(rest);
  }

  return {
    user,
    setUser,
    register,
    login,
    logout,
    refreshToken,
  };
}

export const AuthContainer = createContainer(useAuth);
