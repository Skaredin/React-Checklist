import React, { useState } from 'react';
import TaskItem from './TaskItem';

const ChecklistApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim()) {
            setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
            setTaskText('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        ));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div style={{ width: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
            <h1>Check list</h1>
            <input
                type="text"
                placeholder="Add tasks"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
            <button onClick={addTask} style={{ width: '100%', padding: '8px', backgroundColor: '#4CAF50', color: 'white' }}>
                Crate task
            </button>

            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ChecklistApp;
