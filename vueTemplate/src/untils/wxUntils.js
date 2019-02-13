import { wxSignature, shareCount} from '@/api/'
const appId = "wx004631167cb38682"
let wxConfigData;

export function WX_SHARE(shareObj) {

  // 判断是否已获取到configData
  if (wxConfigData) {
    init(wxConfigData)
  } else {
    // let url = encodeURIComponent(window.location.href.split('#')[0]);
    let url = window.location.href
    wxSignature({ url }).then(function (res) {
      wxConfigData = {
        nonceStr: res.noncestr,
        signature: res.signature,
        timestamp: res.timestamp
      }
      init(res)
    });
  }

  function init(data) {
    wx.config({
      debug: false,
      appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.noncestr, // 必填，生成签名的随机串
      signature: data.signature,// 必填，签名，见附录1

      //需要微信权限列表
      jsApiList: [
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        "onMenuShareQQ",
        "onMenuShareQZone",
        "onMenuShareWeibo"
      ]
    });

    let shareInfo = {
      "imgUrl": shareObj.imgUrl ? shareObj.imgUrl : 'https://mtmall.meetao.com/img/logo100.png',
      "desc": shareObj.desc ? shareObj.desc : '',
      "title": shareObj.title ? shareObj.title : '姿美汇生活家',
      "link": shareObj.link ? shareObj.link : window.location.href,
      "success": function () {
        //分享成功后的回调函数
        console.log('分享成功')
        shareCount({
          materialsId: shareObj.materialsId
        })
      },
      "cancel": function () {
        //用户取消分享执行的回调函数
        console.log('取消分享')
      }
    };

    wx.ready(function () {
      //分享给好友
      shareInfo.success = () => {
        console.log('分享给好友')
      }
      wx.onMenuShareAppMessage(shareInfo);

      //分享到朋友圈
      shareInfo.success = () => {
        console.log('分享到朋友圈')
      }
      wx.onMenuShareTimeline(shareInfo);

      //分享到手机QQ
      shareInfo.success = () => {
        console.log('分享到手机QQ')
      }
      wx.onMenuShareQQ(shareInfo);

      // 分享到QQ空间
      shareInfo.success = () => {
        console.log('分享到QQ空间')
      }
      wx.onMenuShareQZone(shareInfo);

      // 分享到微博
      shareInfo.success = () => {
        console.log('分享到微博')
      }
      wx.onMenuShareWeibo(shareInfo);

    });
  }

  // 处理验证失败的信息
  wx.error(function (res) {
    alert(res.toString());
  })
}