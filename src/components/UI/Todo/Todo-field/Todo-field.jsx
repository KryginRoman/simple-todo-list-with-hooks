import React  from 'react';
import {Form} from 'react-bootstrap'
import './Todo-field.css';

export default ({ value, isValid, touched, onChange, onSubmit }) => {
  const onSubmitHandler = e => {
    e.preventDefault();

    if (!isValid) return false;

    onSubmit();
  }
  return (
    <Form className="todo__field" validated={touched} onSubmit={onSubmitHandler}>
      <Form.Group controlId="todoLabel">
        <Form.Control 
          type="text" 
          onChange={onChange}
          value={value} 
          placeholder="Write todo label"
          required 
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid todo label.
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  )
}