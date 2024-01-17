import { encode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'

/**
 * 太极编码
 * @param {String} str 被编码的字符串
 * @param {Boolean} base64 指示输入内容已经通过 Base64 编码过，无需再次编码
 * @returns 编码后的太极字符串
 */
export function taijiEncode(str, { base64=false }={}) {
  let taiji = base64 ? str : encode(str)

  for (let i = 0; i < 65; i++) {
    taiji = taiji.replaceAll(base64Chs[i], taijiChs[i])
  }

  return taiji
}
