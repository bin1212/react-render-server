const path = require('path')
const nodeExternals = require('webpack-node-externals')
console.log(111)
module.exports = {
    target: 'node',
    entry: './src/server/index.js',
    mode:'development',
    output: {
        path: path.resolve('serverBuild'),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    }
}