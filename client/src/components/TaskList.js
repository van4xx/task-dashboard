import React from "react";

function TaskList({ tasks }) {
    return (
        <div>
            <h3>Your Tasks</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;