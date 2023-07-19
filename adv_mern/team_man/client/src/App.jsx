import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/players/list' />} path='/' />
          <Route element={<Main />} path='/players/list' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
