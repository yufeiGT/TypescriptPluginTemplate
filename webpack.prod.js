const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	entry: {
		index: path.resolve(__dirname, './src/index.ts'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		library: '{{libraryName}}',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	externals: {},
});
