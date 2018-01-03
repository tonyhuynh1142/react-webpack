const path = require('path');
const webpack = require('webpack');

const VENDOR_LIRS = [
	'axios',
	'bootstrap',
	'jquery',
	'react',
	'react-dom',
	'react-redux',
	'react-router-dom',
	'redux',
	'redux-thunk'
]

const config = {
	entry: {
		bundle: './src/index.js',
		vendor : VENDOR_LIRS
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js'
	},
	module : {
		rules : [
			{
				use : 'babel-loader',
				test: /\.js$/,
				exclude: '/node_modules/'
			},
			{
				use: [
					'style-loader',
					'css-loader'
				],
				test : /\.css$/
			},
			{
				loader : 'file-loader',
				test: /.\jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3|\.ico$/
			}
		]
	},
	plugins : [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		})
	] 
}

module.exports = config;