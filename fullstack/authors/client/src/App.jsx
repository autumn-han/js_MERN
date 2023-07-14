import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DisplayAuthors from './components/DisplayAuthors';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/authors' />} path='/' />
          <Route element={<DisplayAuthors />} path='/authors' />
          <Route element={<NewAuthor />} path='/authors/new' />
          <Route element={<UpdateAuthor />} path='/authors/:id/edit' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
