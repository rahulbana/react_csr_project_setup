import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
const path = require('path');
const root = process.cwd();

const config = {
  mode: 'development',
  entry: path.join(root, './app/index.js'),
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(root, '/dist/'),
    publicPath: '/',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: { presets: ["react-app"] },
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(svg|png|gif|jpg|woff|woff2|eot|ttf)$/,
        use: { loader: 'url-loader' }
      },
      {
        test: /\.otf$/,
        use: { loader: 'file-loader' }
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("development")
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ]
      }
    })
  ],
  resolve: {
    extensions: ['jsx', '.json', '.js'],
    modules: [
      path.resolve(root, './app'),
      'node_modules',
    ]
  }
}

module.exports = config
