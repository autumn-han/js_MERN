import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DisplayAuthors from './components/DisplayAuthors';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/authors' />} path='/' />
          <Route element={<DisplayAuthors />} path='/authors' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
