import { taijiEncode, taijiDecode, isVaildTaiji } from './src/index.js'

console.log(taijiEncode('Hello Taiji Encode!'))
console.log(taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
console.log(taijiEncode('你好太极！'))
console.log(taijiDecode('䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗'))

console.log(isVaildTaiji('你好太极！'))
console.log(isVaildTaiji('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
console.log(isVaildTaiji('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯ -- Hello!'))
