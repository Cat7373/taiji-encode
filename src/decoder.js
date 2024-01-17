import { decode } from 'js-base64'
import { base64Chs, taijiChs } from './mapping.js'
import { convMapping } from './util.js'

/**
 * 太极解码
 * @param {String} taiji 被解码的太极字符串
 * @param {Boolean} base64 指示解码后无需进行 Base64 解码，直接输出 Base64 的内容
 * @returns 解码后的字符串
 */
export function taijiDecode(taiji, { base64=false, pwd=null }={}) {
  const mapping = convMapping(pwd)

  let str = ''
  for (let i = 0; i < taiji.length; i++) {
    const ch = taiji[i]
    const idx = mapping(taijiChs.indexOf(ch))
    str += base64Chs[idx]
  }

  return base64 ? str : decode(str)
}
