const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\html$/,
				exclude: /node_modules/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
		compress: true,
		port: 3000,
	},
}
