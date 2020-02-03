const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
	entry: {
		main: './src/js/index.jsx'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, './dist')
	},
	devServer: {
		overlay: true,
		historyApiFallback: {
			index: '/'
		},
		hot: true,
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', {
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')(),
								require('cssnano')()
							]
						}
					}, 'less-loader']
				})
			},
			{
				test: /\.html$/,
				use: ['file-loader?name=[name].html', 'extract-loader', 'html-loader']
			},
			{
				test: /\.(pug|jade)$/,
				use: ['file-loader?name=[name].html', 'extract-loader', 'html-loader', 'pug-html-loader']
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/images',
						name: '[name].[ext]'
					}
				}
			},
			{
				test: /\.(xml|txt)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/files',
						name: '[name].[ext]'
					}
				}
			}

		]
	},
  	plugins: [
    	new ExtractTextPlugin("css/[name].css"),
		new webpack.ProvidePlugin({
			React: 'react',
			$: 'jquery',
			ReactDOM: 'react-dom'
		})
  	],

	resolve:{
		alias: {
			assets: path.resolve(__dirname, 'src/assets'),
			css: path.resolve(__dirname, 'src/css'),
			less: path.resolve(__dirname, 'src/less'),
			scss: path.resolve(__dirname, 'src/scss'),
			js: path.resolve(__dirname, 'src/js'),
			pages: path.resolve(__dirname, 'src/pages')
		},

		extensions: ['.js', '.jsx']
	}
};




module.exports = (env, options) => {
	let mode = options.mode === 'production';

	conf.devtool = mode ? false : 'source-map';

	return conf;
};