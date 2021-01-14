import axios from 'axios';

var url = '/api'

const instance = axios.create({
  baseURL:url,
  // withCredentials:false
});

instance.interceptors.request.use(
  (config) => {
  console.log(config)
  if (config.url == "/dev-auth/auth/clientAuth") {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.headers["x-requested-with"] = "XMLHttpRequest";
  } else {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    config.headers["x-requested-with"] = "XMLHttpRequest";
    config.headers["Authorization"] =
      // "Bearer " + 
      window.localStorage.getItem("root_token");
  }
  return config;
},
(error) => {
  return Promise.reject(error);
});

export default instance;