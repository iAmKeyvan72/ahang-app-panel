import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import MainWrapper from './Components/UI/MainWrapper/MainWrapper';
import NewArtist from './Components/UI/NewArtist/NewArtist';
import AllArtists from './Components/UI/AllArtists/AllArtists';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="artists" element={<MainWrapper />}>
            <Route index element={<AllArtists />} />
            <Route path="new" element={<NewArtist />} />
            {/* <Route path=":artistId" element={<NewArtist id={artistId} />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
