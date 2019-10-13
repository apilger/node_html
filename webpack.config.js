module.exports = {
    entry: './public/index.html',
     output: {
       filename: './[name].js'
     },
     resolve: {
       extensions: ['.ts', '.tsx', '.js']
     },
     module: {
        rules: [{
          test: /\.html$/,
          use: [ {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }],
        }]
      }
   }