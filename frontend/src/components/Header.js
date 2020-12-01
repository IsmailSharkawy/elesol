import React from 'react'
import { Navbar } from 'react-bootstrap'

const Header = () => {
	return (
		<>
			<Navbar bg='light'>
				<Navbar.Brand href='#home'>Brand link</Navbar.Brand>
			</Navbar>
		</>
	)
}

export default Header
