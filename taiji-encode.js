const guaChs = '䷁䷗䷆䷒䷎䷣䷭䷊䷏䷲䷧䷵䷽䷶䷟䷡䷇䷂䷜䷻䷦䷾䷯䷄䷬䷐䷮䷹䷞䷰䷛䷪䷖䷚䷃䷨䷳䷕䷑䷙䷢䷔䷿䷥䷷䷝䷱䷍䷓䷩䷺䷼䷴䷤䷸䷈䷋䷘䷅䷉䷠䷌䷫䷀☯'
const base64Chs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

function taijiEncode(str) {
  let base64 = btoa(str)
  let taiji = base64

  for (let i = 0; i < 65; i++) {
    taiji = taiji.replaceAll(base64Chs[i], guaChs[i])
  }

  return taiji
}

function taijiDecode(taiji) {
  let base64 = taiji

  for (let i = 0; i < 65; i++) {
    base64 = base64.replaceAll(guaChs[i], base64Chs[i])
  }

  let data = atob(base64)

  return data
}

export default {
  taijiEncode, taijiDecode
}
