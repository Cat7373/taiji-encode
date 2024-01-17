import { decode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'
import { convMapping, isVaildTaiji } from './util.js'

/**
 * 太极解码
 * @param {String} taiji 被解码的太极字符串
 * @param {Boolean} base64 指示解码后无需进行 Base64 解码，直接输出 Base64 的内容
 * @param {String} pwd 密码，用于简单加密，解码时需使用相同的密码
 * @param {Boolean} uncheck 不对内容进行校验，无条件解码（不是有效太极编码时可能出现乱码）
 * @returns 解码后的字符串，不是有效太极编码时，会直接返回 null
 */
export function taijiDecode(taiji, { base64=false, pwd=null, uncheck=false }={}) {
  if (!uncheck && !isVaildTaiji(taiji)) {
    return null // 不是有效太极字符串时，返回 null
  }

  const mapping = convMapping(pwd)

  let str = ''
  for (let i = 0; i < taiji.length; i++) {
    const ch = taiji[i]
    const idx = mapping(taijiChs.indexOf(ch))
    str += base64Chs[idx]
  }

  return base64 ? str : decode(str)
}
