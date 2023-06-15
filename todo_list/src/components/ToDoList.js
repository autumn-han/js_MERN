import React, {useState} from 'react';

const ToDoList = ({tasks, setTasks}) => {
    console.log("are you reaching me?")
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false)
    const formHandler = (e) => {
        e.preventDefault();
        const newTask = {task: task, completed: completed};
        setTasks([...tasks, newTask]);
        setTask("");
    }
    // const strikeOut = (e) => {
    //     e.preventDefault();
    //     setTask(strike());
    // }
    return (
        <div>
            <form onSubmit={ formHandler }>
                <label htmlFor="task">Task: </label>
                <input type="text" name="task" value={ task } onChange={ (e) => setTask(e.target.value) } />
                <button>Add Task</button>
            </form>
            <ul>
                {tasks.map( (task, index) => {
                    return (
                        <div>
                            <li key={index}>{task.task}</li>
                            <input type="checkbox" key={index} />
                            <button>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default ToDoList;