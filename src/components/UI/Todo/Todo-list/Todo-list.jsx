import React from 'react';
import TodoItem from '../Todo-item/Todo-item';
import './Todo-list.css';

export default ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {
        todos.map(({ label, completed, id }) => {
          return <TodoItem 
                    label={label} 
                    completed={completed}
                    key={id}
                    toggleComplete={() => toggleComplete(id)}
                    deleteTodo={() => deleteTodo(id)}
                 />
        })
      }
    </ul>
  )
}