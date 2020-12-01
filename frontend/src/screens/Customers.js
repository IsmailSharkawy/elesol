import React from 'react'
import './css/Customers.css'
import logo from './css/img/logo.svg'
import Header from '../components/Header'

const Customers = () => {
	return (
		<>
			<div className='panel'>
				<img className='logo' src={logo} alt='logo' />
			</div>

			<div className='navbar'>
				<input
					className='search fontAwesome'
					type='text'
					placeholder='&#xf002;   Search'
				/>
			</div>
		</>
	)
}

export default Customers
