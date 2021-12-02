import React, { Component } from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../data/Products'

export default class Home extends Component {
	state = {
		cart: [],
	}
	constructor() {
		super()
	}

	cartHasProduct = (product) => {
		const { cart } = this.state

		return cart.find((item) => product.name === item.name)
	}

	addToCart = (product) => {
		const { cart } = this.state

		if (!this.cartHasProduct(product)) {
			return this.setState({
				cart: [...cart, { ...product, mount: 1 }],
			})
		} else {
			const newCart = cart.map((item) => {
				if (item.name === product.name) {
					item.mount += 1
				}
				return item
			})
			return this.setState({
				cart: newCart,
			})
		}
	}

	render() {
		const { cart } = this.state
		return (
			<div>
				<Header productsInCart={cart} shoppingProductsList={cart} />
				<div className="container">
					<h1 className="home__title">Tienda</h1>
					<div className="home__cards-container">
						{Products.map((product) => (
							<Product
								item={product}
								key={product.id}
								addProduct={() => this.addToCart(product)}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}
// https://i.ibb.co/Jp2PPqC/arbejas.jpg
// https://i.ibb.co/mCmWsnS/lechuga.jpg
