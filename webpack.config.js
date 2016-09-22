module.exports = {
	entry: "./react-client.js",
	output: {
		filename: "public/bundle.js"
	},
	resolve: {
	    extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,    
				exclude: /(node_modules|data|public|routes|views)/,
				loader: 'babel',
				query:
			      {
			      	cacheDirectory: true,
			        presets:['react','es2015']
			      }
			},
			{ test: /\.js?$/, 
				exclude: /(node_modules|data|public|routes|views)/,
				loader: 'babel',
				query:
			      {
			      	cacheDirectory: true,
			        presets:['react','es2015']
			      }
			},
			{ test: /\.json?$/, 
				exclude: /(node_modules|data|public|routes|views)/,
				loader: "json-loader",
				query:
			      {
			      	cacheDirectory: true,
			        presets:['react','es2015']
			      } }
		]
	}
};