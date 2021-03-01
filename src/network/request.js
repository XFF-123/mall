import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })

  // 2.axios的拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    //config中的一些信息不符合服务器要求 
    //比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //某些网络请求（比如登录（token）），必须携带一些特殊的信息
    return config
  }, error => {
    console.log(error);    
  })
  //2.2响应拦截
  instance.interceptors.response.use(result => {
    // console.log(result);
    return result.data
  }, error => {
    console.log(error);
  })


  // 3.发送真正的网络请求
  return instance(config)   //instance(config)返回值是Promise
}