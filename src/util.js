import { taijiChs } from './mapping.js'

/**
 * 验证一个字符串是否是一个有效的太极编码字符串
 * @param {String} str 被验证的字符串
 * @returns 验证结果
 */
export function isVaildTaiji(str) {
  const len = str.length
  for (const ch of str) {
    if (!taijiChs.includes(ch)) return false
  }

  return true
}

/**
 * 交换数组元素
 * @param {Array} arr 被交换的数据
 * @param {Number} i 索引 1
 * @param {Number} j 索引 2
 */
function swap(arr, a, b) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

/**
 * 基于密码生成置换函数
 * 算法参考自 RC4
 * @param {String} key 密码，注意，超出 64 位的部分将被静默忽略
 * @returns 置换函数
 */
export function convMapping(key) {
  // 如果没有 key，则不做映射
  if (!key) return idx => idx

  // 初始化置换表
  const S = []
  for (let i = 0; i < 64; i++) {
    S.push(i)
  }

  // 基于 Key 做初始置换
  let j = 0
  for (let i = 0; i < 64; i++) {
    j = (j + S[i] + key[i % key.length].charCodeAt(0)) % 64

    // Swap
    swap(S, i, j)
  }

  // 生成置换函数
  let i = 0
  j = 0
  return idx => {
    // = 部分永远映射为 ☯，不做替换处理
    if (idx == 64) return 64

    i = (i + 1) % 64
    j = (j + S[i]) % 64
    swap(S, i, j)
    return idx ^ S[(S[i] + S[j]) % 64]
  }
}
