import React, { useState } from 'react';
import TaskList from '../components/TaskList.js';
import TaskForm from '../components/TaskForm.js';

function Home() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id) => {
        // Логика редактирования задачи
    };

    return (
        <div>
            <h2>Task Dashboard</h2>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
        </div>
    );
}

export default Home;
