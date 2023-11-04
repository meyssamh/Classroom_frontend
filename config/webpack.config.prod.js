const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const base = require('./webpack.config.base');

module.exports = merge(base, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: {
					loader: 'ts-loader',
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s(c|a)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
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
				test: /\.(png|jpe?g)$/i,
				use: [
					{
						loader: 'responsive-loader',
						// TODO: Use image with lower quality as placeholder for that image!
						options: {
							name: 'assets/images/[name].[contenthash].[ext]',
							format: 'avif',
						},
					},
				],
				type: 'javascript/auto',
			},
			{
				test: /\.ttf$/i,
				type: 'asset/resource',
			},
			{
				test: /\.ico$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './assets/icons/'
						}
					}
				]
			},
		],
	},
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
		},
		minimizer: [
			// eslint-disable-next-line quotes
			`...`,
			new CssMinimizerPlugin(),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Class',
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash].css',
			chunkFilename: 'static/css/[name].[contenthash].chunk.css',
			ignoreOrder: true,
		}),
		new Dotenv({
			systemvars: true,
			path: './.env.production',
			safe: true,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './public/manifest.json',
					to: './',
					toType: 'dir',
				},
				{
					from: './public/assets/icons/',
					to: './assets/icons/[name][ext]',
					toType: 'template',
				},
			],
		}),
		new BundleAnalyzerPlugin(),
	],
});