import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './Context/AuthContext';
import PrivateRoute from './Utils/PrivateRoute';

import Layout from './Pages/Layout/Layout';
import MainWrapper from './Pages/Layout/MainWrapper/MainWrapper';
import ArchivePage from './Pages/ArchivePage/ArchivePage';
import AuthenticationLayout from './Pages/Authentication/AuthenticationLayout';
import Login from './Pages/Authentication/Login/Login';
import Signup from './Pages/Authentication/Signup/Signup';
import Logout from './Pages/Authentication/Logout/Logout';
import AddNewItemLayout from './Pages/AddNewItem/AddNewItemLayout';
import AddNewTrack from './Pages/AddNewItem/AddNewTrack/AddNewTrack';
import AddNewArtist from './Pages/AddNewItem/AddNewArtist/AddNewArtist';

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
                <Route
                  path="page/:page"
                  element={
                    <ArchivePage
                      type="artist"
                      endpoint={process.env.REACT_APP_ARTISTS}
                    />
                  }
                />
                <Route element={<AddNewItemLayout />}>
                  <Route path="new" element={<AddNewArtist />} />
                  <Route path="edit/:id" element={<AddNewArtist />} />
                </Route>
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
                <Route
                  path="page/:page"
                  element={
                    <ArchivePage
                      type="track"
                      endpoint={process.env.REACT_APP_TRACKS}
                    />
                  }
                />
                <Route element={<AddNewItemLayout />}>
                  <Route path="new" element={<AddNewTrack />} />
                  <Route path="edit/:id" element={<AddNewTrack />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
