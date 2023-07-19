import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route to={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
