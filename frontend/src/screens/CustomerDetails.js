import React, { useEffect, useState } from 'react'
import axios from 'axios'
import beat from './css/img/beat-1.svg'
import line from './css/img/line-1.svg'
import logo from './css/img/logo.svg'
import { Alert, Button, Dropdown, Table } from 'react-bootstrap'
const CustomerDetails = ({ history, match }) => {
	const [alerts, setAlerts] = useState([])
	const [customerData, setCustomerData] = useState({})
	const {
		firstname,
		lastname,
		birthdate,
		email,
		country,
		state,
		gender,
		phone,
		address,
		lead,
	} = customerData
	async function test() {
		const { data } = await axios.get(`/api/customers/${match.params.email}`)
		setCustomerData(data)
		console.log(data)
	}
	useEffect(() => {
		test()
		// setCustomerData(data)
	}, [match.params.email])
	const SignOut = () => {
		history.push('/')
	}
	const onMenuClick = () => {
		document.getElementById('myDropdown').classList.toggle('show')
	}
	const onEdit = () => {
		history.push(`/edit/${email}`)
	}
	return (
		<div>
			<div className='panel'>
				<img className='logo' src={logo} alt='logo' />
				<div className='dropdown'>
					<button id='clickable' className='dropbtn' onClick={onMenuClick}>
						<i className='fas fa-user-tie'></i> Customers
					</button>
					<div id='myDropdown' className='dropdown-content'>
						<a href='#home'>
							<i className='fas fa-home fa-2x'></i> Household Owners
						</a>
						<a href='#about'>
							<i className='fas fa-industry fa-2x'></i> Industry Owners
						</a>
					</div>
				</div>
			</div>

			<div className='navbar'>
				<input
					className='search fontAwesome'
					type='text'
					placeholder='&#xf002;   Search'
				/>
				<Button variant='outline-light' className='signout' onClick={SignOut}>
					<i className='fas fa-door-open'></i> SIGN OUT
				</Button>
			</div>
			<div className='heartbeat'>
				<img className='beat-1' src={beat} alt='heart-beat' />
				<Button className='add-customer' onClick={onEdit}>
					<i className='fas fa-edit'></i>EDIT
				</Button>
				<Button className='add-customer'>
					<i className='fas fa-plus-circle'></i>ADD NEW ORDERS
				</Button>
				<img className='line-1' src={line} alt='line' />
			</div>
			<span className='title-2'>Customer Details</span>
			{alerts &&
				alerts.length > 0 &&
				alerts.map((alert) => (
					<Alert variant='warning' className='alert'>
						{alert}
					</Alert>
				))}
			<div className='card-details'>
				<form>
					<div className='details-container'>
						<div>
							<span className='ident'>Type:</span>
							<span className='input' type='text' required name='firstname'>
								Household
							</span>
						</div>
						<div>
							<span className='ident'>Status:</span>
							<span
								className='ident'
								name='lastname'
								style={{ color: '#C89D04' }}
							>
								Customer
							</span>
						</div>
					</div>
					<div className='details-container'>
						<div>
							<span className='ident'>First Name:</span>
							<span className='input' type='text' required name='firstname'>
								{firstname}
							</span>
						</div>
						<div>
							<span className='ident'>Last Name:</span>
							<span className='input' name='lastname'>
								{lastname}
							</span>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Birthdate:</span>
							<span className='input'>
								{birthdate &&
									birthdate.substring(0, 10).split('-').reverse().join('-')}
							</span>
						</div>

						<div className='test-3'>
							<span className='ident'>Email:</span>
							<span className='input'>{email}</span>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Country:</span>
							<span className='input'>{country}</span>
						</div>
						<div className='test-3'>
							<span className='ident'>State:</span>
							<span className='input'>{state}</span>
						</div>
					</div>

					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Gender:</span>
							<span className='input'>{gender}</span>
						</div>
						<div className='test-3'>
							<span className='ident'>Phone:</span>
							<span className='input'>{phone}</span>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Lead:</span>
							<span className='input'>{lead}</span>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Address:</span>
							<span className='input'>{address}</span>
						</div>
					</div>
					<div className='details-container'>
						<div className='details-tab'>
							<div className='details-container-tab'>
								<div className='test-3'>
									<span className='ident'>Date Created:</span>
									<span className='input'>{country}</span>
								</div>
								<div className='test-3'>
									<span className='ident'>Date Sales:</span>
									<span className='input'>{state}</span>
								</div>
							</div>
							<div className='details-container-tab'>
								<div className='test-3'>
									<span className='ident'>Date Edited:</span>
									<span className='input'>{country}</span>
								</div>
								<div className='test-3'>
									<span className='ident'>Date Technician:</span>
									<span className='input'>{state}</span>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CustomerDetails
