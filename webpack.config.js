const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)?/,
                exclude: /node_modules/
            }
        ]
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}