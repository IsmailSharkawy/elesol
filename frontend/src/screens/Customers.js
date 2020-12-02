import React, { useEffect, useState } from 'react'
import './css/Customers.css'
import axios from 'axios'
import logo from './css/img/logo.svg'
import { Button, Dropdown, Table } from 'react-bootstrap'
import beat from './css/img/beat-1.svg'
import line from './css/img/line-1.svg'
import { Loader } from '../components/Loader'
import Card from '../components/Card'

const Customers = ({ history }) => {
	const [customers, setCustomers] = useState([])
	const [loading, setLoading] = useState(true)

	const onMenuClick = () => {
		document.getElementById('myDropdown').classList.toggle('show')
	}
	const SignOut = () => {
		history.push('/')
	}

	useEffect(() => {
		async function getData() {
			const { data } = await axios.get(`/api/customers`)
			setCustomers(data)
		}

		getData()
		console.log(customers)
		setLoading(false)
	}, [])
	const addCustomer = () => {
		history.push('add')
	}
	return (
		<>
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

			<Dropdown className='filter'>
				<i className='fas fa-list fa-2x'></i>Filter By
			</Dropdown>

			<span className='title-1'>Customers</span>
			<div className='heartbeat'>
				<img className='beat-1' src={beat} alt='heart-beat' />
				<Button className='add-customer'>
					<i className='fas fa-file-export'></i>EXPORT ALL ORDERS
				</Button>
				<Button className='add-customer' onClick={addCustomer}>
					<i className='fas fa-plus-circle'></i>ADD NEW CUSTOMERS
				</Button>
				<img className='line-1' src={line} alt='line' />
			</div>
			<div className='box-1'>
				{/* <Table hover bordered striped className='table-sm test'> */}
				{/* <thead className='test table-sm'> */}
				{/* <tr> */}
				<div className='field'></div>
				<div className='field'>ID</div>
				<div className='field'>Name</div>
				<div className='field'>Email</div>
				<div className='field'>Country</div>
				<div className='field'>State</div>
				<div className='field'>Status</div>
			</div>
			{/* </tr> */}
			{/* </thead> */}

			{loading ? (
				<Loader />
			) : (
				customers.map((customer) => (
					// <tr key='1'>
					// 	<td>
					// 		<input
					// 			name='isGoing'
					// 			type='checkbox'
					// 			value={customer._id}
					// 			onChange={(e) => console.log(e.target.value)}
					// 		/>
					// 	</td>
					// 	<td>{customer._id}</td>
					// 	<td>
					// 		{customer.firstname} {customer.lastname}
					// 	</td>
					// 	<td>{customer.email}</td>
					// 	<td>{customer.country}</td>
					// 	<td>{customer.state}</td>
					// 	<td>{customer.status}</td>
					// </tr>
					<Card
						_id={customer._id}
						firstname={customer.firstname}
						lastname={customer.lastname}
						email={customer.email}
						country={customer.country}
						state={customer.state}
						status={customer.status}
					/>
				))
			)}
			{/* </Table> */}
		</>
	)
}

export default Customers
