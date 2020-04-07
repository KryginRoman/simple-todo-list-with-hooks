import React from 'react';
import {Button} from 'react-bootstrap';
import Checkbox from '../../Checkbox/Checkbox';
import './Todo-item.css';

export default ({ label, completed, toggleComplete, deleteTodo }) => {
  const classList = ["todo-list__item"];

  if (completed) classList.push("todo-list__item_completed");

  return (
    <li className={classList.join(" ")}>
      <Checkbox 
        checked={completed}
        onChange={toggleComplete}
      />
      <p className="todo-list__item-label">{label}</p>
      <Button 
        variant="danger" 
        size="sm" 
        onClick={deleteTodo}
      >
        Delete
      </Button>
    </li>
  )
}