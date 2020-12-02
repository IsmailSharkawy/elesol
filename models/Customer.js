const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		birthdate: {
			type: Date,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		gender: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		lead: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			default: 'Customer',
		},
	},
	{ timestamps: true }
)

module.exports = Customer = mongoose.model('customer', CustomerSchema)
