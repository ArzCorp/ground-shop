import React, { Component } from 'react'
import CartItem from './CartItem'

export default class ShoppingCart extends Component {
	state = {
		listOpen: false,
	}
	constructor() {
		super()
	}

	render() {
		const { listOpen } = this.state
		const { productsInCart, shoppingProductsList } = this.props

		return (
			<div className="shopping-cart">
				<button
					className="header__cart"
					onClick={() =>
						this.setState({
							listOpen: !listOpen,
						})
					}
				>
					Carrito
					{productsInCart === 0 ? null : (
						<p className="header__cart--products">
							{productsInCart > 9 ? '9+' : productsInCart}
						</p>
					)}
				</button>
				{listOpen ? (
					<div className="shopping-cart__list">
						{shoppingProductsList.length > 0 ? (
							shoppingProductsList.map((product) => (
								<CartItem key={product.id} product={product} />
							))
						) : (
							<p className="shopping-cart__list--message">
								Agrega productos a tu carrito
							</p>
						)}
					</div>
				) : null}
			</div>
		)
	}
}
