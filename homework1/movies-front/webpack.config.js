const path = require('path');

const PATH = {
    SRC: path.join(__dirname, 'src'),
    PUBLIC: path.join(__dirname, 'src', 'public'),
    DIST: path.join(__dirname, 'dist'),
};

module.exports = {
    context: PATH.SRC,
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: PATH.DIST,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(PATH.SRC),
            public: path.resolve(PATH.PUBLIC),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    },
                    'sass-loader'
                ],
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },

    devServer: {
        contentBase: PATH.DIST,
        port: 9001
    }
}
