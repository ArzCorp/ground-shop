import React, { Component } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Products from '../data/Products'

export default class Home extends Component {
	state = {
		productsInCart: 0,
		productsListInCart: [],
	}
	constructor() {
		super()
	}

	cartHasProduct(product) {
		const { productsListInCart } = this.state

		return (
			productsListInCart.filter((item) => product.name === item.name).length <=
			0
		)
	}

	addedInCart(product) {
		const { productsListInCart } = this.state

		if (this.cartHasProduct(product)) {
			return [...productsListInCart, { ...product, mount: 1 }]
		} else {
			return productsListInCart.map((item) => {
				if (item.name === product.name) {
					item.mount += 1
				}
				return item
			})
		}
	}

	render() {
		const { productsInCart, productsListInCart } = this.state
		return (
			<div>
				<Header
					productsInCart={productsInCart}
					shoppingProductsList={productsListInCart}
				/>
				<div className="container">
					<h1 className="home__title">Tienda</h1>
					<div className="home__cards-container">
						{Products.map((product) => (
							<ProductCard
								key={product.id}
								addProduct={() =>
									this.setState({
										productsInCart: (this.state.productsInCart += 1),
										productsListInCart: this.addedInCart(product),
									})
								}
								item={product}
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
