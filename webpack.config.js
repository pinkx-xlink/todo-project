 const path = require('path')

 module.exports = {
     entry: './src/index.js',
     output: {
         filename: 'index.js',
         path: path.resolve(__dirname, 'dist'),
//         //not sure yet what name to change to...^
    },
 };