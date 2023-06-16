import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Integer from './components/Integer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:num" element={<Integer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
