/**
 * 全局通用函数汇总
 *
 */
import {
  baseUrl
} from '@/config.js';

//cookie相关操作
export function delCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

export function getCookie(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};

export function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};

//获取地址参数
export function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

//微信判断
export function is_weixn() {
  let ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  };
};

//获取打开窗口浏览器
export function browserVersions() {
  let u = navigator.userAgent,
    app = navigator.appVersion;
  return { //移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1,
    //IE内核
    presto: u.indexOf('Presto') > -1,
    //opera内核
    webKit: u.indexOf('AppleWebKit') > -1,
    //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
    //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    //android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1,
    //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1,
    //是否iPad
    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
  };
};

//下载app封装
export function downAppFun() {
  if (browserVersions().ios == true) {
    window.location.href = 'mitaohui://';
    setTimeout(function () {
      window.location.href = 'https://itunes.apple.com/cn/app/id1417124131?mt=8&time=' + new Date().getTime();
    }, 250);
    setTimeout(function () {
      window.location.reload();
    }, 1000);
    setTimeout(function () {
      window.history.back();
    }, 2000);
  } else {
    window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.simeiol.zimeihui&time=' + new Date().getTime();
  };
};

//获取当前登录域名
export function regionUrl() {
  if (baseUrl == 'https://testfx.meetao.com/') { //开发环境
    return 'https://testmtmall.meetao.com/';
  } else if (baseUrl == 'https://prefx.meetao.com/') { //预生产
    return 'https://premtmall.meetao.com/';
  } else if (baseUrl == 'https://grayfx.meetao.com/') { //灰度
    return 'https://graymtmall.meetao.com/';
  } else { //默认为生产
    //baseUrl == 'https://fx.meetao.com/'
    return 'https://mtmall.meetao.com/';
  };
};

//跳转商品详情封装方便管理
export function jumpProductDetails(productId) {
  location.href = regionUrl() + "html/productDetails.html?isFx=1&productId=" + productId;
};

//全局公共参数
var versions = 1.6, //181114新增版本号 具体变更参加readme
  isApp = getQueryString('isApp'),
  userDataInfo = JSON.parse(unescape(getCookie('zmtH5Mall'))),
  zmtH5MallId = JSON.parse(unescape(getCookie('zmtH5MallId'))),
  zmtH5MallShareId = JSON.parse(unescape(getCookie('zmtH5MallShareId'))),
  userId = !userDataInfo ? '' : userDataInfo.uniqueCode,
  openId = !userDataInfo ? '' : userDataInfo.openId,
  access_token = !userDataInfo ? '' : userDataInfo.access_token,
  token = access_token,
  shareUserId = !!getQueryString('shareUserId') ? getQueryString('shareUserId') : !!zmtH5MallId ? zmtH5MallId : '',
  shareShopCode = !!getQueryString('shareShopCode') ? getQueryString('shareShopCode') : !!zmtH5MallShareId ? zmtH5MallShareId : '';

setCookie('zmtH5MallId', escape(JSON.stringify(shareUserId)), 30);
setCookie('zmtH5MallShareId', escape(JSON.stringify(shareShopCode)), 30);

export let commmon = {
  versions,
  isApp,
  shareUserId,
  shareShopCode
}
