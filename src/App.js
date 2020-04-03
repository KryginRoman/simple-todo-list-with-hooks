import React, { useState }  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Auth from './components/UI/Auth/Auth';
import LoginForm from './components/UI/Login/Login';
import './App.css';

export default () => {
  const [isLoggin, toggleLoggin] = useState(false);
  const [correctLogin, setNewCorrectLogin] = useState("Roman1337");
  const [correctPass, setNewCorrectPass] = useState("1234");

  const toggleLoginHandler = () => toggleLoggin(!isLoggin);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => <Auth isLogin={isLoggin} toggleHandler={toggleLoginHandler} />}
          />
          <Route 
            exact 
            path="/login" 
            component={() => <LoginForm 
                                correctLogin={correctLogin} 
                                correctPass={correctPass}
                             />}
          />
        </Switch>
      </div>
    </Router>
  );
}
