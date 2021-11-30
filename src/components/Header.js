import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="container">
					<h2 className="header-logo">Ground Shop</h2>
					<button className="header-car">Carrito</button>
				</div>
			</div>
		)
	}
}
