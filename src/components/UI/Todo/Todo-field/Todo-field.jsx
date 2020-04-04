import React  from 'react';
import {Form} from 'react-bootstrap'
import './Todo-field.css';

export default ({ value, onChange, onSubmit }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit();
  }
  return (
    <Form className="todo__field" onSubmit={onSubmitHandler}>
      <Form.Group controlId="todoLabel">
        <Form.Control 
          type="text" 
          onChange={onChange}
          value={value} 
          placeholder="Write todo label"
        />
      </Form.Group>
    </Form>
  )
}