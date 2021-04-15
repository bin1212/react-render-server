const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    target: 'node',
    entry: './src/server/index.js',
    mode:'development',
    output: {
        path: path.resolve('serverBuild'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            },
            {
                test:/\.css$/,
                use:[
                    'isomorphic-style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    }
}