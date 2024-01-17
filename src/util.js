import { taijiChs } from './mapping.js'

/**
 * 验证一个字符串是否是一个有效的太极编码字符串
 * @param {String} str 被验证的字符串
 * @returns 验证结果
 */
export function isVaildTaiji(str) {
  const len = str.length
  for (let ch of str) {
    if (!taijiChs.includes(ch)) return false
  }

  return true
}
