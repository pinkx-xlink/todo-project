const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'src.bundle.js',
        //not sure yet what name to change to...^
    },
}