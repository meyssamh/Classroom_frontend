const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const base = require('./webpack.config.base');

module.exports = merge(base, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: {
					loader: 'ts-loader',
				},
				exclude: / node_modules /,
			},
			{
				test: /\.s(c|a)ss$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
					},
				]
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.ttf$/,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		hot: true,
		open: true,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Class',
			template: './public/index.html'
		}),
		new Dotenv({
			systemvars: true,
			path: './.env', // Path to .env file (this is the default)
			safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
		})
	],
});