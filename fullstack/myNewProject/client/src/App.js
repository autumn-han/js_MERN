import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../views/Main';

function App() {
  return (
    <div>
      <BrowserRoutes>
        <Routes>
          <Route element={<Main />} path='/home' default />
        </Routes>
      </BrowserRoutes>
    </div>
  );
}

export default App;
