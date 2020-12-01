import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import SignIn from './screens/SignIn'
import Customers from './screens/Customers'

const App = () => {
	return (
		<Router>
			<Route path='/' component={SignIn} exact />

			<Route path='/customers' component={Customers} />
		</Router>
	)
}

export default App
