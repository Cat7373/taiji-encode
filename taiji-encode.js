import { encode, decode } from 'js-base64'

/**
 * 六十四卦的每个字符，加代表 Base64 等于号的太极图
 */
const guaChs = '䷁䷗䷆䷒䷎䷣䷭䷊䷏䷲䷧䷵䷽䷶䷟䷡䷇䷂䷜䷻䷦䷾䷯䷄䷬䷐䷮䷹䷞䷰䷛䷪䷖䷚䷃䷨䷳䷕䷑䷙䷢䷔䷿䷥䷷䷝䷱䷍䷓䷩䷺䷼䷴䷤䷸䷈䷋䷘䷅䷉䷠䷌䷫䷀☯'
/**
 * Base64 的字符映射表
 */
const base64Chs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

/**
 * 太极编码
 * @param {String} str 被编码的字符串
 * @returns 编码后的太极字符串
 */
export function taijiEncode(str) {
  let base64 = encode(str)
  let taiji = base64

  for (let i = 0; i < 65; i++) {
    taiji = taiji.replaceAll(base64Chs[i], guaChs[i])
  }

  return taiji
}

/**
 * 太极解码
 * @param {String} taiji 被解码的太极字符串
 * @returns 解码后的字符串
 */
export function taijiDecode(taiji) {
  let base64 = taiji

  for (let i = 0; i < 65; i++) {
    base64 = base64.replaceAll(guaChs[i], base64Chs[i])
  }

  let data = decode(base64)

  return data
}
