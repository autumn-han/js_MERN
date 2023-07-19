import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NewPizza from './views/NewPizza';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' />
          <Route element={<NewPizza />} path='/new' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
