const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const webpackModule = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react'],
					plugins: [
						'@babel/plugin-proposal-optional-chaining',
						[
							'@babel/plugin-proposal-pipeline-operator',
							{ proposal: 'minimal' },
						],
						['babel-plugin-styled-components', { ssr: false }],
						'babel-plugin-macros',
					],
				},
			},
		},
		{
			test: /\.s[ac]ss$/i,
			use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
         test: /\.js$/,
         enforce: 'pre',
         use: ['source-map-loader'],
       },
	],
}

module.exports = {
	output: {
		filename: 'boundle.js',
	},
	module: webpackModule,
	resolve: {
		alias: {
			"react-ui": path.resolve(__dirname, 'src/react-ui/'),
			"ui": path.resolve(__dirname, 'src/react-ui/'),
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'react webpack app',
			template: './src/index.html',
		}),
	],
}
