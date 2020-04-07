import React, { useState }  from 'react';
import TodoField from './Todo-field/Todo-field';
import TodoList from './Todo-list/Todo-list';
import './Todo.css';

export default () => {
  const [fieldValue, setFieldValue] = useState("");
  const [isTouchedFieldValue, setTouchedFieldValue] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [maxLength] = useState(12);
  const onChangeFieldValueHandler = ({ target }) => {
    setTouchedFieldValue(true);
    setFieldValue(target.value)
  };
  const onAddTodoHandler = () => {
    const label = fieldValue.toLocaleLowerCase();
    const isEqualLabel = todoList.filter(todo => todo.label === label).length;

    if (isEqualLabel) return;

    const itemId = todoList.length + 1;
    const todoItem = {
      label: label,
      completed: false,
      id: itemId
    }
    const newTodoList = [...todoList, todoItem]
    setTodoList(newTodoList);
    setFieldValue("");
    setTouchedFieldValue(false);
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
  const fieldValidator = (value) => {
    const valueLength = value.length;
    return (valueLength <= maxLength) && (valueLength >= 1);
  }

  return (
    <div className="todo">
        <h1 className="todo__header">Todos</h1>
        <TodoField 
          value={fieldValue} 
          onChange={onChangeFieldValueHandler}
          onSubmit={onAddTodoHandler}
          isValid={fieldValidator(fieldValue)}
          touched={isTouchedFieldValue}
        />
        <TodoList 
          todos={todoList} 
          toggleComplete={onToggleTodoComplete}
          deleteTodo={onDeleteTodo}
        />
    </div>
  )
}