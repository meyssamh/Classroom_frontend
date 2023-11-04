const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	output: {
		clean: true,
		filename: 'static/js/[name].[contenthash].bundle.js',
		chunkFilename: 'static/js/[name].[contenthash].chunk.js',
		assetModuleFilename: 'assets/fonts/[hash][ext]',
		path: path.resolve(__dirname, '../dist'),
	},
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, 'src/'),
			'$/': path.resolve(__dirname, 'types/'),
			'#/': path.resolve(__dirname, 'public/assets/'),
			'^/': path.resolve(__dirname, 'src/hoc/'),
		},
		extensions: ['.tsx', '.ts', '.js', '.sass', '.scss'],
		plugins: [new TsconfigPathsPlugin()],
	},
};