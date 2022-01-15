import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './Utils/PrivateRoute';
import Layout from './Pages/Layout/Layout';
import MainWrapper from './Pages/Layout/MainWrapper/MainWrapper';
import NewArtist from './Pages/NewArtistPage/NewArtistPage';
import ArchivePage from './Pages/ArchivePage/ArchivePage';
import AuthenticationLayout from './Pages/Authentication/AuthenticationLayout';
import Login from './Pages/Authentication/Login/Login';
import Signup from './Pages/Authentication/Signup/Signup';
import { AuthContextProvider } from './Context/AuthContext';
import Logout from './Pages/Authentication/Logout/Logout';
import NewTrackPage from './Pages/NewTrackPage/NewTrackPage';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route element={<AuthenticationLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="logout" element={<Logout />} />
            <Route element={<Layout />}>
              <Route path="artist" element={<MainWrapper />}>
                <Route
                  index
                  element={
                    <ArchivePage
                      type="artist"
                      endpoint={process.env.REACT_APP_ARTISTS}
                    />
                  }
                />
                <Route path="new" element={<NewArtist />} />
                <Route path="edit/:id" element={<NewArtist />} />
                <Route
                  path="page/:page"
                  element={
                    <ArchivePage
                      type="artist"
                      endpoint={process.env.REACT_APP_ARTISTS}
                    />
                  }
                />
              </Route>
              <Route path="track" element={<MainWrapper />}>
                <Route
                  index
                  element={
                    <ArchivePage
                      type="track"
                      endpoint={process.env.REACT_APP_TRACKS}
                    />
                  }
                />
                <Route path="new" element={<NewTrackPage />} />
                <Route path="edit/:id" element={<NewTrackPage />} />
                <Route
                  path="page/:page"
                  element={
                    <ArchivePage
                      type="track"
                      endpoint={process.env.REACT_APP_TRACKS}
                    />
                  }
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
