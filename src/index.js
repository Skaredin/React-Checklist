import React from 'react';
import ReactDOM from 'react-dom/client'; // Измените импорт здесь
import './index.css';
import ChecklistApp from './App';

// Находим корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
    <React.StrictMode>
        <ChecklistApp />
    </React.StrictMode>
);
