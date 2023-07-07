import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './components/Detail'
import Main from './views/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/people/' default />
          <Route element={<Detail />} path='/people/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
