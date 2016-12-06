module.exports = {
    entry: './src/index.js',    // webpack Entry point

    output: {
        path: __dirname + '/public/', // __dirname 은 현재 디렉토리
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};
