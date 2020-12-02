import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import SignIn from './screens/SignIn'
import Customers from './screens/Customers'
import CreateCustomer from './screens/CreateCustomer'
import CustomerDetails from './screens/CustomerDetails'
import EditCustomer from './screens/EditCustomer'

const App = () => {
	return (
		<Router>
			<Route path='/' component={SignIn} exact />

			<Route path='/customers' component={Customers} />
			<Route path='/add' component={CreateCustomer} />
			<Route path='/info/:email' component={CustomerDetails} />
			<Route path='/edit/:email' component={EditCustomer} />
		</Router>
	)
}

export default App
