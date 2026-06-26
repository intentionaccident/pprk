const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
	if (!env) {
		env = {}
	}
	return {
		entry: ["./src/index.tsx"],
		mode: env.production ? "production" : "development",
		devtool: "source-map",
		devServer: {
			historyApiFallback: true,
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json", ".sass"],
		},
		module: {
			rules: [
				{
					test: /\.(tsx?)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "ts-loader",
						},
					],
				},
				{
					enforce: "pre",
					test: /\.js$/,
					loader: "source-map-loader",
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								modules: {
									exportLocalsConvention: "camel-case-only",
								}
							}
						},
						"sass-loader",
					],
				},
			],
		},
		optimization: {
			splitChunks: {
				chunks: "all",
			},
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
			}),
			new MiniCssExtractPlugin(),
		],
	}
}
