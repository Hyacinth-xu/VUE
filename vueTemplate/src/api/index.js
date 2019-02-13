/**
 * @describe  存放各种API请求
 * @example GET(url, query, options)
 *          POST(url, body, options)
 */

import { GET, POST } from './config/index.js'
import { commonUrl } from '../config.js'

// 微信签名
export function wxSignature(params, options) {
	let url = commonUrl + 'api/uc/auth/getSignature/v2'
	return GET(url, params, options)
}
// 分享计数
export function shareCount(params, options) {
	let url = 'api/fx/content/share/count.json'
	return GET(url, params, options)
}

// 查询店主信息
export function queryShopCode(params, options) {
	let url = 'api/fx/user/shop/queryShopCode.json'
	return GET(url, params, options)
}

// 获取素材详情
export function getDetail(params, options) {
	let url = 'api/fx/content/materials/detail/get.json'
	return GET(url, params, options)
}

// 姿美大学获取素材详情
export function getDetailUniversity(params, options) {
	let url = 'api/fx/content/materials/wx/share'
	return GET(url, params, options)
}


