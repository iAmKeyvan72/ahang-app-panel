import { createContext } from 'react';

import useAuthentication from '../hooks/useAuthentication';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { authTokens, user, login, logout, loading, setAuthTokens, setUser } =
    useAuthentication();

  let provider = {
    authTokens,
    user,
    login,
    logout,
    loading,
    setAuthTokens,
    setUser,
  };

  return (
    <AuthContext.Provider value={provider}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
