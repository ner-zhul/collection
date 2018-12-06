/* eslint-disable import/no-extraneous-dependencies */
import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: { name: 'collection', file: pkg.main, format: 'es' },
};
