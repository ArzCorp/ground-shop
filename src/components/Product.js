import React, { Component } from 'react'

export default class ProductCard extends Component {
	render() {
		const { addProduct } = this.props
		const { name, price, img } = this.props.item
		return (
			<div className="product-card">
				<figure className="product-card__img-container">
					<img
						src={img}
						alt={name}
						className="product-card__img-container--img"
					/>
				</figure>
				<div className="product-card__description">
					<h3 className="product-card__description--name">{name}</h3>
					<p className="product-card__description--price">{`$${price}`}</p>
					<button
						className="product-card__description--button"
						onClick={addProduct}
					>
						Agregar <i className="fas fa-shopping-cart"></i>
					</button>
				</div>
			</div>
		)
	}
}
