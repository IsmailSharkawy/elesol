import React, { useEffect, useState } from 'react'
import axios from 'axios'

import logo from './css/img/logo.svg'
import { Alert, Button, Dropdown, Table } from 'react-bootstrap'
const EditCustomer = ({ history, match }) => {
	async function test() {
		const { data } = await axios.get(`/api/customers/${match.params.email}`)
		setFormData(data)
	}
	const [formData, setFormData] = useState({})
	useEffect(() => {
		test()
	}, [])
	const [alerts, setAlerts] = useState([])
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
		status,
	} = formData

	const onChange = (e) => {
		e.preventDefault()

		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(formData)
	}
	const onMenuClick = () => {
		document.getElementById('myDropdown').classList.toggle('show')
	}
	const SignOut = () => {
		history.push('/')
	}
	const onUpdateCustomer = async (e) => {
		e.preventDefault()

		console.log(alerts)
		await axios
			.put(`/api/customers/edit/${email}`, formData)
			.catch(function (err) {
				console.log(err.response.data.errors)
				if (err.response.data.errors)
					err.response.data.errors.map((error) => {
						setAlerts([...alerts, error.msg])
					})
			})
		if (alerts.length === 0) {
			history.push(`/info/${email}`)
		}
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
			<span className='title-2'>Edit Customer</span>
			{alerts &&
				alerts.length > 0 &&
				alerts.map((alert) => (
					<Alert variant='warning' className='alert'>
						{alert}
					</Alert>
				))}
			<div className='card-details'>
				<form onSubmit={(e) => onUpdateCustomer}>
					<div className='details-container'>
						<div>
							<span className='ident'>Type:</span>
							<span className='input'>Household</span>
						</div>
						<div>
							<span className='ident'>Status:</span>
							<select
								className='input'
								required
								name='status'
								value={status}
								onChange={(e) => {
									onChange(e)
								}}
							>
								<option className='input' value='Customer'>
									Customer
								</option>
								<option className='input' value='Sales'>
									Sales
								</option>
								<option className='input' value='Technician'>
									Technician
								</option>
								<option className='input' value='Edited'>
									Edited
								</option>
							</select>
						</div>
					</div>
					<div className='details-container'>
						<div>
							<span className='ident'>First Name:</span>
							<input
								className='input'
								type='text'
								required
								name='firstname'
								value={firstname}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>
						<div>
							<span className='ident'>Last Name:</span>
							<input
								className='input'
								name='lastname'
								required
								type='text'
								value={lastname}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Birthdate:</span>
							<input
								className='input'
								required
								type='date'
								name='birthdate'
								value={birthdate && birthdate.substring(0, 10)}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>

						<div className='test-3'>
							<span className='ident'>Email:</span>
							<input
								className='input'
								type='email'
								required
								name='email'
								value={email}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Country:</span>

							<select
								className='input'
								required
								name='country'
								value={country}
								onChange={(e) => {
									onChange(e)
								}}
							>
								<option className='input' value='New Zealand'>
									New Zealand
								</option>
								<option className='input' value='Australia'>
									Australia
								</option>
							</select>
							{/* <small className='form-text'>
							Give us an idea of where you are at in your career
						</small> */}
						</div>

						<div className='test-3'>
							<span className='ident'>State:</span>

							{/* New South Wales, Queensland, South Australia, Tasmania, Victoria, Western Australia */}
							{country === 'Australia' ? (
								<select
									className='input'
									name='state'
									required
									value={state}
									onChange={(e) => {
										onChange(e)
									}}
								>
									<option className='input' value='New South Wales'>
										New South Wales
									</option>
									<option className='input' value='Queensland'>
										Queensland
									</option>
									<option className='input' value='South Australia'>
										South Australia
									</option>
									<option className='input' value='Tasmania'>
										Tasmania{' '}
									</option>
									<option className='input' value='Victoria'>
										Victoria{' '}
									</option>
									<option className='input' value='Western Australia'>
										Western Australia{' '}
									</option>
								</select>
							) : (
								<select
									className='input'
									name='state'
									value={state}
									onChange={(e) => {
										onChange(e)
									}}
								>
									{/* Gisborne, Northland, Manawatu-Whanganui ,Hawke's Bay, West Coast ,Bay of Plenty,Southland,Waikato,Tasman,Marlborough,Taranaki, */}
									{/* Otago,Canterbury,Auckland,Wellington */}
									<option className='input' value='Gisborne'>
										Gisborne
									</option>
									<option className='input' value='Northland'>
										Northland
									</option>
									<option className='input' value='Manawatu-Whanganui'>
										Manawatu-Whanganui
									</option>
									<option className='input' value='Hawkes Bay'>
										Hawke's Bay
									</option>
									<option className='input' value='West Coast'>
										West Coast
									</option>
									<option className='input' value='Bay of Plenty'>
										Bay of Plenty
									</option>
									<option className='input' value='Southland'>
										Southland
									</option>
									<option className='input' value='Waikato'>
										Waikato
									</option>
									<option className='input' value='Tasman'>
										Tasman
									</option>
									<option className='input' value='Marlborough'>
										Marlborough
									</option>
									<option className='input' value='Taranaki'>
										Taranaki
									</option>
									<option className='input' value='Otago'>
										Otago
									</option>
									<option className='input' value='Canterbury'>
										Canterbury
									</option>
									<option className='input' value='Auckland'>
										Auckland
									</option>
									<option className='input' value='Wellington'>
										Wellington
									</option>
								</select>
							)}
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Gender:</span>
							<select
								className='input'
								required
								name='gender'
								value={gender}
								onChange={(e) => {
									onChange(e)
								}}
							>
								<option className='input' value='Male'>
									Male
								</option>
								<option className='input' value='Female'>
									Female
								</option>
							</select>
						</div>
						<div className='test-3'>
							<span className='ident'>Number:</span>
							<input
								className='input'
								required
								type='text'
								name='phone'
								value={phone}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Address:</span>
							<input
								className='input'
								required
								type='text'
								name='address'
								style={{ width: '70vh' }}
								value={address}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>
					</div>
					<div className='details-container'>
						<div className='test-3'>
							<span className='ident'>Lead:</span>
							<input
								className='input'
								type='text'
								required
								name='lead'
								style={{ width: '70vh' }}
								value={lead}
								onChange={(e) => {
									onChange(e)
								}}
							></input>
						</div>
					</div>

					<div className='details-container'>
						<Button
							className='add-btn'
							type='submit'
							onClick={onUpdateCustomer}
						>
							Update Customer
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditCustomer
