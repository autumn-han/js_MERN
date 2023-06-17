import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NumOrString from './components/NumOrString';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:thing" element={<NumOrString />} />
        <Route path="/:thing/:color/:backColor" element={<NumOrString />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
