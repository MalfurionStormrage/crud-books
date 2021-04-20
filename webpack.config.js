const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

//--mode -> development || production
const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode);
module.exports = {

	entry: 	'./frontend/index.js',

	output: {
		path : path.join(__dirname , 'dist/public'),
		filename: 'js/index.js'
	},

	module:{
		rules:[
			{
				test: /\.css/,//entry css
				use:[
					devMode ? 'style-loader' : miniCssExtractPlugin.loader,
					// miniCssExtractPlugin.loader,
					'css-loader'
				]
			},

			{
				test: /\.js$/,
				loader:'babel-loader'
			},

			{	
				test: /\.(png|svg|jpg|jpeg|gif)$/,//entry img
        		use:[
        			{
        				loader:"file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'asset/',
                            useRelativePath: true
                        }
        			}
        		]
			}
		]
	},
	//minimzer css
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},

	plugins: [ 
		new HtmlWebpackPlugin({
			template: './frontend/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
		new miniCssExtractPlugin({
			filename:"css/index.css"
		})
	],
	devtool: 'source-map'	
}