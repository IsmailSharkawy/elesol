import React, { useState } from 'react'
import './css/SignIn.css'
import logo from './css/img/logo.svg'
import beat from './css/img/beat.svg'
import line from './css/img/line.svg'

import { Form, Button } from 'react-bootstrap'

const SignIn = ({ history }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const onBtnClick = () => {
		if (username === 'admin' && password === 'admin') {
			history.push('/customers')
		} else {
			console.log('Password incorrect')
		}
	}
	return (
		<>
			<div className='panel'>
				<img className='logo' src={logo} alt='logo' />

				{/* <div className='beat-container'> */}
				<div className='heartbeat'>
					<img className='beat' src={beat} alt='heart-beat' />
					<Button className='btn' onClick={onBtnClick}>
						Sign In
					</Button>
					<img className='line' src={line} alt='line' />
				</div>
				{/* </div> */}
			</div>
			<div className='signin'>SIGN IN</div>
			<div className='form'>
				<div className='username'>
					<span>ID / Email: </span>
					<input
						type='text'
						onChange={(e) => setUsername(e.target.value)}
					></input>
				</div>
				<br></br>
				<div className='password'>
					<span>Password: </span>
					<input
						type='text'
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
			</div>
		</>
	)
}

export default SignIn
