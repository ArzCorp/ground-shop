import React, { Component } from 'react'
import CartItem from './CartItem'

export default class ShoppingCart extends Component {
	state = {
		cartOpen: false,
	}
	constructor() {
		super()
	}

	render() {
		const { cartOpen } = this.state
		const { shoppingProductsList } = this.props
		const quantity = shoppingProductsList.reduce(
			(acc, product) => acc + product.mount,
			0
		)

		return (
			<div className="shopping-cart">
				<button
					className="header__cart"
					onClick={() =>
						this.setState({
							cartOpen: !cartOpen,
						})
					}
				>
					Carrito
					{quantity === 0 ? null : (
						<p className="header__cart--products">
							{quantity > 9 ? '9+' : quantity}
						</p>
					)}
				</button>
				{cartOpen ? (
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
