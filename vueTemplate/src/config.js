
// 配置编译环境和线上环境之间的切换
let commonUrl = '' // 认证接口
let baseUrl = '' // 分销接口
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  commonUrl = 'https://testoauth.meetao.com/'
  baseUrl = 'https://testfx.meetao.com/'

} else if (process.env.NODE_ENV === 'production') {
  // 打包上线环境

  // 根据不同的环境切换接口请求路径
  switch (window.location.origin) {
    // 内测环境
    case 'https://testsmtmall.meetao.com':
      commonUrl = 'https://testoauth.meetao.com/'
      baseUrl = 'https://testfx.meetao.com/'
      break

    // 预生产环境
    case 'https://presmtmall.meetao.com':
      commonUrl = 'https://preoauth.meetao.com/'
      baseUrl = 'https://prefx.zimeitang.cn/'
      break

    // 灰度环境
    case 'https://graysmtmall.meetao.com':
      commonUrl = 'https://grayoauth.meetao.com/'
      baseUrl = 'https://grayfx.meetao.com/'
      break

    // 生产环境
    case 'https://smtmall.meetao.com':
      commonUrl = 'https://oauth.meetao.com/'
      baseUrl = 'https://fx.zimeitang.cn/'
      break
  }
}
export {
  baseUrl,
  commonUrl
}
