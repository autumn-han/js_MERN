import './App.css';
import {useState} from 'react';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

function App() {
  const [boxes, setBoxes] = useState([{color:"red", height:100, width: 100, display:"flex", margin: 10}]);
  console.log("is this working")
  return (
    <div className="App">
      <DisplayBox boxes={boxes} />
      <BoxForm boxes={boxes} setBoxes={setBoxes} />
    </div>
  );
}

export default App;
