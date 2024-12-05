import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: {
    CalenderCalculate: './src/index',
  },
  mode: "production",
  output: {
    filename: 'CalenderCalculate.mjs',
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
  devtool: false,
};