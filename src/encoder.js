import { encode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'
import { convMapping } from './util.js'

/**
 * 太极编码
 * @param {String} str 被编码的字符串
 * @param {Boolean} base64 指示输入内容已经通过 Base64 编码过，无需再次编码
 * @param {String} pwd 密码，用于简单加密，解码时需使用相同的密码
 * @returns 编码后的太极字符串
 */
export function taijiEncode(str, { base64=false, pwd=null }={}) {
  const base64Str = base64 ? str : encode(str)
  const mapping = convMapping(pwd)

  let taiji = ''
  for (let i = 0; i < base64Str.length; i++) {
    const ch = base64Str[i]
    const idx = mapping(base64Chs.indexOf(ch))
    taiji += taijiChs[idx]
  }

  return taiji
}
