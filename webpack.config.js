var webpack = require('webpack');

var runtime = new webpack.ProvidePlugin({
  to5Runtime: "imports?global=>{}!exports?global.to5Runtime!6to5/runtime"
});

module.exports =  {
  entry: {
    App: ['webpack/hot/dev-server', './livecode/js/src/App.jsx']
  },
  output: {
    path: 'livecode/js',
    filename: '[name].js', 
    publicPath: '/js'
  },
  module: {
    loaders: [
      { 
      test: /\.jsx$/, 
      exclude: /node_modules/, 
      loader: 'react-hot!6to5-loader?runtime'
    }
    ]
  },
  externals: { },
  resolve: {
    moduleDirectories: ['node_modules', 'livecode/js/src'],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    runtime
  ],
  devtool: '#inline-source-map'
};


