import { decode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'

/**
 * 太极解码
 * @param {String} taiji 被解码的太极字符串
 * @param {Boolean} base64 指示解码后无需进行 Base64 解码，直接输出 Base64 的内容
 * @returns 解码后的字符串
 */
export function taijiDecode(taiji, { base64=false }={}) {
  let str = taiji

  for (let i = 0; i < 65; i++) {
    str = str.replaceAll(taijiChs[i], base64Chs[i])
  }

  return base64 ? str : decode(base64)
}
