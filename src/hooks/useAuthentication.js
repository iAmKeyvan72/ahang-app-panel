import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('tokens')
      ? JSON.parse(localStorage.getItem('tokens'))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('tokens')
      ? jwt_decode(localStorage.getItem('tokens'))
      : null
  );
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const login = async (values) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_AUTH_LOGIN,
        {
          username: values.username,
          password: values.password,
          clientId: process.env.REACT_APP_CLIENT_ID,
          appPackageName: process.env.REACT_APP_APP_PACKAGE_NAME,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = response.data;
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwt_decode(data.accessToken));
        localStorage.setItem('tokens', JSON.stringify(data));
        navigate('/artists');
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const logout = useCallback(() => {
    try {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('tokens');
      navigate('/login');
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }, [navigate]);

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.accessToken));
    }

    setLoading(false);
  }, [loading, authTokens]);

  return { authTokens, user, login, logout, loading, setAuthTokens, setUser };
};

export default useAuthentication;
