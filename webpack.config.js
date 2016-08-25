var webpack = require('webpack');

module.exports = {

    entry: {
        'app': './src/main.ts'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['babel?presets=es2015', 'ts', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                include: ['/home/zim32/app'],
                loader: 'raw'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8: true },
            compress: { screw_ie8: true },
            comments: false
        })
    ],

    output: {
        path: '/home/zim32/app/build',
        filename: '[name].js'
    }

};