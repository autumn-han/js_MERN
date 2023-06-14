import './App.css';
import {useState} from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([{task: "Do the laundry", completed: false}]);
  return (
    <div className="App">
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
