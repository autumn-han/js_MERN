import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Detail from './components/Detail';
import Main from './views/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/people/' />} path='/' />
          <Route element={<Main/>} path='/people/' />
          <Route element={<Detail/>} path='/people/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
