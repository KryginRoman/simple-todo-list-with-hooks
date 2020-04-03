import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Auth.css';

export default ({ isLogin, toggleHandler }) => {
	const text = isLogin ? 'Выйти из профиля' : 'Зайдите в профиль';
	const pathTo = isLogin ? '/' : '/login';
	return (
		<div className="auth">
			<p className="auth__text">{text}</p>
			<Link to={pathTo}>
				<Button 
					variant="primary" 
					onClick={toggleHandler}
				>
					{isLogin ? 'Logout' : 'Login'}
				</Button>
			</Link>
		</div>
	)
}