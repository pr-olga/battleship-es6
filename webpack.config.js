module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
}
