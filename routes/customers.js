const express = require('express')
const Customer = require('../models/Customer')
const { check, validationResult } = require('express-validator')
const { findOne } = require('../models/Customer')

const router = express.Router()

router
	.route('/')
	.post(
		[
			check('email', 'Please enter a valid email').isEmail(),
			check('firstname', 'First Name field is required').not().isEmpty(),
			check('lastname', 'Last Name field is required').not().isEmpty(),
			check('birthdate', 'Birthdate field is required').not().isEmpty(),
			check('phone', 'Phone field is required').not().isEmpty(),
			check('email', 'Email field is required').not().isEmpty(),
			check('address', 'Address field is required').not().isEmpty(),
			check('lead', 'Lead field is required').not().isEmpty(),
		],
		async (req, res) => {
			const errors = validationResult(req)

			const {
				firstname,
				lastname,
				birthdate,
				phone,
				email,
				gender,
				country,
				state,
				address,
				lead,
			} = req.body
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() })
			}
			try {
				const emailValidate = await Customer.findOne({ email })
				const phoneValidate = await Customer.findOne({ phone })
				if (emailValidate) {
					return res.status(400).json({
						errors: [
							{
								msg: 'Email already in use',
							},
						],
					})
				}
				if (phoneValidate) {
					return res.status(400).json({
						errors: [
							{
								msg: 'Phone already in use',
							},
						],
					})
				}
				const customerBody = await new Customer({
					firstname,
					lastname,
					birthdate,
					phone,
					email,
					gender,
					country,
					state,
					address,
					lead,
				})
				await customerBody.save()
				res.send('Customer Added!')
			} catch (error) {
				console.log(error.message)
				res.status(500).send('Server error')
			}
		}
	)

router
	.route('/edit/:email')
	.put(
		[
			check('email', 'Please enter a valid email').isEmail(),
			check('firstname', 'First Name field is required').not().isEmpty(),
			check('lastname', 'Last Name field is required').not().isEmpty(),
			check('birthdate', 'Birthdate field is required').not().isEmpty(),
			check('phone', 'Phone field is required').not().isEmpty(),
			check('email', 'Email field is required').not().isEmpty(),
			check('address', 'Address field is required').not().isEmpty(),
			check('lead', 'Lead field is required').not().isEmpty(),
		],
		async (req, res) => {
			const errors = validationResult(req)

			const {
				firstname,
				lastname,
				birthdate,
				phone,
				email,
				gender,
				country,
				state,
				address,
				lead,
				status,
			} = req.body
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() })
			}
			try {
				// const emailValidate = await Customer.findOne({ email })
				// const phoneValidate = await Customer.findOne({ phone })
				// if (emailValidate) {
				// 	return res.status(400).json({
				// 		errors: [
				// 			{
				// 				msg: 'Email already in use',
				// 			},
				// 		],
				// 	})
				// }
				// if (phoneValidate) {
				// 	return res.status(400).json({
				// 		errors: [
				// 			{
				// 				msg: 'Phone already in use',
				// 			},
				// 		],
				// 	})
				// }
				const customer = await Customer.findOne({
					email: req.params.email,
				})
				if (customer) {
					if (firstname) customer.firstname = firstname
					if (lastname) customer.lastname = lastname
					if (email) customer.email = email
					if (country) customer.country = country
					if (state) customer.state = state
					if (address) customer.address = address
					if (lead) customer.lead = lead
					if (gender) customer.gender = gender
					if (birthdate) customer.birthdate = birthdate
					if (phone) customer.phone = phone
					if (status) customer.status = status
				}
				await customer.save()
				res.send('Updated Successfully!')
			} catch (error) {
				console.log(error.message)
				res.status(500).send('Server error')
			}
		}
	)

router.route('/').get(async (req, res) => {
	try {
		const customers = await Customer.find({})
		if (customers) {
			res.json(customers)
		} else {
			res.status(404).json({ msg: 'No customers found.' })
		}
	} catch (error) {
		console.log(error)
		res.status(500).send('Server Error')
	}
})

router.route('/:email').get(async (req, res) => {
	try {
		const customer = await Customer.findOne({ email: req.params.email })
		if (customer) {
			res.json(customer)
		} else {
			res.status(404).json({ msg: 'No customer found.' })
		}
	} catch (error) {
		console.log(error)
		res.status(500).send('Server Error')
	}
})

module.exports = router
