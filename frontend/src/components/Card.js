import React from 'react'

const Card = (props) => {
	console.log(props)
	return (
		props && (
			// <div className='customer-card'>
			// <tr className='customer-card'>
			<div className='box box-container'>
				<div className='field'>
					<input
						name='isGoing'
						type='checkbox'
						value={props._id}
						onChange={(e) => console.log(e.target.value)}
					/>
				</div>
				<div className='field'>{props._id}</div>
				<div className='field'>
					{props.firstname} {props.lastname}
				</div>
				<div className='field'>{props.email}</div>
				<div className='field'>{props.country}</div>
				<div className='field'>{props.state}</div>
				<div className='field'>{props.status}</div>
				{/* </tr> */}
			</div>
		)
	)
}

export default Card
