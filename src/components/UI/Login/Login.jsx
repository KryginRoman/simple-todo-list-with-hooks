import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import './Login.css';

export default ({ correctLogin, correctPass }) => {
  const [login, setLogin] = useState("");
  const [pass, setPasss] = useState("");
  const [isValid, setValid] = useState(false);

  const changeLoginHandler = ({ target }) => {
    setLogin(target.value);
  }
  const changePassHandler = ({ target }) => {
    setPasss(target.value);
  }

  return (
    <div className="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            value={login} 
            onChange={changeLoginHandler} 
            placeholder="Enter your login"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={pass} 
            onChange={changePassHandler} 
            placeholder="Password"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit" disabled={!isValid}>
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  )
}