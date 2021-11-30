import React, { Component } from 'react'

export default class Header extends Component {
	constructor() {
		super()
	}
	render() {
		const { productsInCart } = this.props
		return (
			<div className="header">
				<div className="container">
					<h2 className="header__logo">Ground Shop</h2>
					<button className="header__cart">
						Carrito
						{productsInCart === 0 ? null : (
							<p className="header__cart--products">{productsInCart}</p>
						)}
					</button>
				</div>
			</div>
		)
	}
}
