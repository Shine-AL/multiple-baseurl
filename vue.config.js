module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target:'https://apidev.rootcloud.com',
        pathRewrite:{
          '^/api':''
        },
        changeOrigin:true
      }
    }
  }
}