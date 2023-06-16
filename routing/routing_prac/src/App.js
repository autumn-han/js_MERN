import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Integer from './components/Integer';
import String from './components/String';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:num" element={<Integer />} />
        <Route path="/:string" element={<String />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
