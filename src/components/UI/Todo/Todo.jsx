import React, { useState }  from 'react';
import TodoField from './Todo-field/Todo-field';
import TodoList from './Todo-list/Todo-list';
import './Todo.css';

export default () => {
  const [fieldValue, setFieldValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChangeFieldValueHandler = ({ target }) => {
    setFieldValue(target.value)
  };
  const onAddTodoHandler = () => {
    const itemId = todoList.length + 1;
    const todoItem = {
      label: fieldValue,
      completed: false,
      id: itemId
    }
    const newTodoList = [...todoList, todoItem]
    setTodoList(newTodoList);
    setFieldValue("");
  }
  const onToggleTodoComplete = todoId => {
    const newTodoList = todoList.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })

    setTodoList(newTodoList);
  }
  const onDeleteTodo = todoId => {
    const newTodoList = todoList.filter(todo => todo.id !== todoId);

    setTodoList(newTodoList);
  }
  
  return (
    <div className="todo">
        <h1 className="todo__header">Todos</h1>
        <TodoField 
          value={fieldValue} 
          onChange={onChangeFieldValueHandler}
          onSubmit={onAddTodoHandler}
        />
        <TodoList 
          todos={todoList} 
          toggleComplete={onToggleTodoComplete}
          deleteTodo={onDeleteTodo}
        />
    </div>
  )
}