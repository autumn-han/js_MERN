import './App.css';
import {useState} from 'react';
import Tabs from './components/Tabs';

function App() {
  const [tabs, setTabs] = useState([{label:"Tab 1", content:"Hello, this is Tab 1"}, {label:"Tab 2", content:"This is Tab 2, checking in"}, {label:"Tab 3", content:"Finally, I'm Tab 3!"}]);
  return (
    <Tabs tabs={tabs} setTabs={setTabs} />
  )
}

export default App;
