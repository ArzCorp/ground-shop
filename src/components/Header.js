import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart'

export default class Header extends Component {
	constructor() {
		super()
	}

	render() {
		const { productsInCart, shoppingProductsList } = this.props
		return (
			<div className="header">
				<div className="container">
					<h2 className="header__logo">Ground Shop</h2>
					<ShoppingCart
						productsInCart={productsInCart}
						shoppingProductsList={shoppingProductsList}
					/>
				</div>
			</div>
		)
	}
}
