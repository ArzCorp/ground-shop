import React, { Component } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

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
					<ProductCard
						addProduct={() =>
							this.setState({
								productsInCart: (this.state.productsInCart += 1),
							})
						}
						item={{
							name: 'tomate',
							price: '1500',
							img: 'https://i.ibb.co/122VT2W/tomate.jpg',
						}}
					/>
				</div>
			</div>
		)
	}
}
// https://i.ibb.co/Jp2PPqC/arbejas.jpg
// https://i.ibb.co/mCmWsnS/lechuga.jpg
