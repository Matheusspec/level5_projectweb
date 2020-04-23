module.exports = {
    entry: ['@babel/polyfill','./src/home.js'],
    output: {
        path: __dirname + '/',
        filename : './src/bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules : [
            {
                test: /\.js/,
              exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}

