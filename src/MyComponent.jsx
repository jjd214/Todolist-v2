import { useState } from "react";

function MyComponent() {

    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    function taskChange(event) {
        setInputTask(event.target.value);
    }

    function addTaskHandler() {
        if(inputTask == '') return;

        if(editIndex === null || editIndex === '') {
            setTasks(prevTasks => [...prevTasks, inputTask]);
            setInputTask('');
        } else {
            tasks.forEach(function(_, index, array) {
                if(index == editIndex) {
                    array[index] = inputTask;
                    setTasks(prevTasks => [...prevTasks])
                }
            })
            setInputTask('');
            setEditIndex(null);
        }

        setEditIndex(null);
    }

    function updateTaskHandler(index) {
        const task = tasks.filter((_, i) => i === index);
        setEditIndex(index);
        setInputTask(task);
    }

    function deleteTaskHandler(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return(
        <div>
            <h1>To-Do List App</h1>

            <input type="text" id="inputTask" placeholder="Enter a task" value={inputTask} onChange={(event)=>taskChange(event)}/>
            <button onClick={addTaskHandler}>Add Task</button>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((tasks, index, _) =>
                    <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ tasks }</td>
                        <td>
                            <button onClick={()=>updateTaskHandler(index)}>Update</button>
                            <button onClick={()=>deleteTaskHandler(index)}>Delete</button>
                        </td>
                    </tr>
                    ) }
                </tbody>
            </table>
        </div>
    )
}

export default MyComponent
