import React from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import './Todo-item.css';

export default ({ label, completed, toggleComplete, deleteTodo }) => {
  return (
    <li className="todo-list__item">
      <Checkbox 
        checked={completed}
        onChange={toggleComplete}
      />
      <p className="todo-list__item-label">{label}</p>
      <div className="todo-list__item-delete" onClick={deleteTodo}></div>
    </li>
  )
}