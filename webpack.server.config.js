const root = require('app-root-path').path;

module.exports = {
  entry: `${root}/server/index.ts`,
  target: 'node',
  mode: 'production',
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: [
    /^[a-z\-0-9]+$/, // Ignore node_modules folder,
  ],
  output: {
    filename: 'compiled', // output file
    path: `${root}/build_server`,
    libraryTarget: 'commonjs',
  },
  resolve: {
    modules: [`${root}/node_modules`],
    // Add in `.ts` and `.tsx` as a resolvable extension.
    mainFields: ['main'],
    extensions: ['.config.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {
      'core-js/features': `${root}/node_modules/@firebase/polyfill/node_modules/core-js/features`,
      'jss-plugin-global/dist': `${root}/node_modules/@material-ui/styles/node_modules/jss-plugin-global/dist`,
      'jss-plugin-nested/dist': `${root}/node_modules/@material-ui/styles/node_modules/jss-plugin-nested/dist`,
      'jss-plugin-rule-value-function': `${root}/node_modules/@material-ui/styles/node_modules/jss-plugin-rule-value-function`,
    },
  },
  module: {
    rules: [
      {
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
                jsx: 'react',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
