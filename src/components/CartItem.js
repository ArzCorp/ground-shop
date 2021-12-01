import React, { Component } from 'react'

export default class CartItem extends Component {
	constructor() {
		super()
	}

	render() {
		const { product } = this.props
		return (
			<article className="shopping-card">
				<figure className="shopping-card__container-img">
					<img
						src={product.img}
						alt={`Producto ${product.name}`}
						className="shopping-card__container-img--img"
					/>
				</figure>
				<p className="shopping-card__name">{product.name}</p>
				<p className="shopping-card__mount">{product.mount}</p>
			</article>
		)
	}
}
