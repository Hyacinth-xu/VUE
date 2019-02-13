/**

 * @description 网络请求框架封装
 */

/* eslint-disable */
import Axios from 'axios';
import QS from 'querystring';
import {
  baseUrl
} from '../../config.js';
import router from '../../router/index.js'


// TODO 设置请求基本路径，所有请求路径之前会加上基本路径
Axios.defaults.baseURL = baseUrl;

// TODO 设置超时时间
Axios.defaults.timeout = 10000;

// TODO 设置请求头
Axios.defaults.headers = {
  // 'Accept': '*/*',
  // 'Content-Type': 'application/json; charset=utf-8'
  'Content-Type': 'application/x-www-form-urlencoded'
};

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
  return status;
};

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
  return QS.stringify(params);
};

// TODO 设置POST等请求 body 序列化
/* Axios.defaults.transformRequest = [function (body) {
  let data = body || {};
  if (body instanceof window.FormData) {
    return body
  }
  return JSON.stringify(data)
}] */

// TODO 设置统一请求拦截
Axios.interceptors.response.use(response => {
  
  if (response.data && response.data.tag !== 0) {
    console.log('************tag !== 0*************', response)

    // if (response && response.data && response.data.errMsg === "token time out.") {
    //   // 清空登录信息，重新登录
    //   window.localStorage.removeItem('access_token')
    //   window.localStorage.removeItem('uniqueCode')
    //   window.localStorage.removeItem('time_out')
    //   router.replace('/login')
    // }

  }
  return response.data
}, error => {
  return Promise.reject(error);
});

/**
 * @description 统一 GET 请求
 * @param url
 */
function GET(url, params, option) {
  url = url.indexOf('//') > -1 ? url : baseUrl + url;
  if (option) {
    for (var property in option) {
      Axios.defaults[property] = option[property];
    }
  }
  // 公共参数

  // let access_token = window.localStorage.getItem('access_token')
  // let uniqueCode = window.localStorage.getItem('uniqueCode')
  // if (access_token) {
  //   params.access_token = access_token
  // }
  // if (uniqueCode) {
  //   params.uid_ = uniqueCode
  //   params.userId = uniqueCode
  // }
  // params.m_ = '1.0'
  // params.v_ = '1.0'
  // params.pt_ = "h5salary"



  return new Promise((resolve, reject) => {
    Axios.get(url, {
      params
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function POST(url, body, option) {
  url = url.indexOf('//') > -1 ? url : baseUrl + url;
  if (option) {
    for (var property in option) {
      Axios.defaults[property] = option[property];
    }
  }
  // 公共参数
  let access_token = window.localStorage.getItem('access_token')
  let uniqueCode = window.localStorage.getItem('uniqueCode')
  if (access_token) {
    body.access_token = access_token
  }
  if (uniqueCode) {
    body.uid_ = uniqueCode
    body.userId = uniqueCode
  }
  body.m_ = '1.0'
  body.v_ = '1.0'
  body.pt_ = "h5salary"
  // body = JSON.stringify(body)
  return new Promise(function (resolve, reject) {
    Axios.post(url, body)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}


export {
  GET,
  POST
};
