import React, { Component } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Products from '../data/Products'

export default class Home extends Component {
	state = {
		productsInCart: 0,
	}
	constructor() {
		super()
	}
	render() {
		const { productsInCart } = this.state
		return (
			<div>
				<Header productsInCart={productsInCart} />
				<div className="container">
					<h1 className="home__title">Tienda</h1>
					<div className="home__cards-container">
						{Products.map((product) => (
							<ProductCard
								addProduct={() =>
									this.setState({
										productsInCart: (this.state.productsInCart += 1),
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
