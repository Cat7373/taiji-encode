import { encode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'

/**
 * 太极编码
 * @param {String} str 被编码的字符串
 * @returns 编码后的太极字符串
 */
export function taijiEncode(str) {
  const base64 = encode(str)
  let taiji = base64

  for (let i = 0; i < 65; i++) {
    taiji = taiji.replaceAll(base64Chs[i], taijiChs[i])
  }

  return taiji
}