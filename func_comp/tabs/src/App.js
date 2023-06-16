import './App.css';
import {useState} from 'react';
import Tabs from './components/Tabs';

function App() {
  const tabsArr = [
    {label:"Tab 1", content:"Hi, I'm Tab 1. Nice to meet you."},
    {label:"Tab 2", content:"What's up, I'm Tab 2. I could care less who you are."},
    {label:"Tab 3", content:"Hello, I'm Tab 3. I'm the youngest of my tab siblings!"}
  ];
  const [allTabs, setAllTabs] = useState(tabsArr);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs allTabs={allTabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
  )
}

export default App;
