const webpack = require('webpack')
const path = require('path')

const config = {
	entry: {
		app: './app.js'
	},
	output: {
		path: './dist/',
		filename: '[name].js'
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules')
		]
	} 
}

module.exports = config