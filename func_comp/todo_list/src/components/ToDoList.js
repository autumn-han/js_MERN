import React, {useState} from 'react';

const ToDoList = ({tasks, setTasks}) => {
    console.log(tasks)
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false)
    const formHandler = (e) => {
        e.preventDefault();
        const newTask = {task: task, completed: completed};
        setTasks([...tasks, newTask]);
        setTask("");
    }
    const checkTask = (e, idx) => {
        const updatedTasks = tasks.map((task, i) => {
            if(idx === i) {
                task.completed = !task.completed;
            }
            return task;
        })
        setTasks(updatedTasks);
    }
    const deleteTask = (e, delIndex) => {
        const filteredTasks = tasks.filter((task, index) => {
            return index !== delIndex;
        });
        setTasks(filteredTasks);
    }
    return (
        <div>
            <form onSubmit={ formHandler }>
                <label htmlFor="task">Task: </label>
                <input type="text" name="task" value={ task } onChange={ (e) => setTask(e.target.value) } />
                <button>Add Task</button>
            </form>
            <ul>
                {tasks.map( (task, index) => {
                    const taskClasses = [];
                    if(task.completed == true) {
                        taskClasses.push("strikethru");
                    }
                    return (
                        <div>
                            <li className={taskClasses.join("")} key={index}>{task.task}</li>
                            <input type="checkbox" checked={task.completed} onChange={ (e) => checkTask(e, index)} />
                            <button onClick={ (e) => deleteTask(e, index)}>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default ToDoList;