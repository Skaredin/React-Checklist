import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        if (isEditing) {
            editTask(task.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                style={{ marginRight: '10px' }}
            />
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    flexGrow: 1,
                    wordBreak: 'break-word',
                }}
            >
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        style={{ width: '100%' }}
                    />
                ) : (
                    task.text
                )}
            </span>
            <button onClick={handleEdit} style={{ marginRight: '10px' }}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => deleteTask(task.id)} style={{ backgroundColor: 'red', color: 'white' }}>
                Redmi
            </button>
        </li>
    );
};

export default TaskItem;
