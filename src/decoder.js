import { decode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'

/**
 * 太极解码
 * @param {String} taiji 被解码的太极字符串
 * @returns 解码后的字符串
 */
export function taijiDecode(taiji) {
  let base64 = taiji

  for (let i = 0; i < 65; i++) {
    base64 = base64.replaceAll(taijiChs[i], base64Chs[i])
  }

  const str = decode(base64)
  return str
}
