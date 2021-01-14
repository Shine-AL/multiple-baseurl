import axios from 'axios';

var url = 'http://140.143.235.204:8081'

const interval = axios.create({ //创建实例
  baseURL:url
});

interval.interceptors.request.use((config) => { //设置请求头
  // console.log(config)
  if (config.url == "/api-auth/oauth/token") {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.headers["x-requested-with"] = "XMLHttpRequest";
  } else {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    config.headers["x-requested-with"] = "XMLHttpRequest";
    config.headers["Authorization"] =
      // "Bearer " + 
      window.localStorage.getItem("access_token");
  }
  return config;
},
(error) => {
  return Promise.reject(error);
});

export default interval;