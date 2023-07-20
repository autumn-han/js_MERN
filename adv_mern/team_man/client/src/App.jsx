import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main';
import NewPlayer from './views/NewPlayer';
import GameOneStats from './views/GameOneStats';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/players/list' />} path='/' />
          <Route element={<Main />} path='/players/list' />
          <Route element={<NewPlayer />} path='/players/addplayer' />
          <Route element={<GameOneStats />} path='/status/game/1' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
