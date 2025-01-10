import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: {
    CalenderCalculate: ['./src/getYear', './src/getWeek', './src/getPast', './src/getMonth', './src/constants', './src/index'],
  },
  mode: "production",
  output: {
    filename: 'CalenderCalculate.mjs',
    chunkFormat: "module",
    path: path.resolve(__dirname, 'lib'),
    library: {
      type: "module",
    },
    clean: true
  },
  experiments: {
    outputModule: true
  },
  plugins: [],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  target: 'es5',
  devtool: false,
};