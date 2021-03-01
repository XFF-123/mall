module.exports = {
  configureWebpack:{
    resolve:{
      alias: {
        'assets': '@/assets',
        'commonJs': '@/commonJs',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}