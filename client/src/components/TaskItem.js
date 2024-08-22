import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
    return (
        <div className="task-item">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
