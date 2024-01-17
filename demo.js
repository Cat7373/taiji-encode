import { taijiEncode, taijiDecode, isVaildTaiji } from './src/index.js'

console.log('普通编码:')
console.log(`taijiEncode('Hello Taiji Encode!') ==> ${taijiEncode('Hello Taiji Encode!')}`)
console.log(`taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯') ==> ${taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯')}`)
console.log(`taijiEncode('你好太极！') ==> ${taijiEncode('你好太极！')}`)
console.log(`taijiDecode('䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗') ==> ${taijiDecode('䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗')}`)

console.log('验证是否为太极编码:')
console.log(`isVaildTaiji('你好太极！') ==> ${isVaildTaiji('你好太极！')}`)
console.log(`isVaildTaiji('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯') ==> ${isVaildTaiji('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯')}`)
console.log(`isVaildTaiji('Hello ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯') ==> ${isVaildTaiji('Hello ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯')}`)

console.log('直接编解码 Base64:')
console.log(`taijiEncode('SGVsbG8gVGFpamkgRW5jb2RlIQ==', { base64: true }) ==> ${taijiEncode('SGVsbG8gVGFpamkgRW5jb2RlIQ==', { base64: true })}`)
console.log(`taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯', { base64: true }) ==> ${taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯', { base64: true })}`)

console.log('简单加解密:')
console.log(`taijiEncode('Hello Taiji Encode!', { pwd: 'Hello Taiji!' }) ==> ${taijiEncode('Hello Taiji Encode!', { pwd: 'Hello Taiji!' })}`)
console.log(`taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯')} ==> ${taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯')}`)
console.log(`taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯', { pwd: 'abcdef' })} ==> ${taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯', { pwd: 'abcdef' })}`)
console.log(`taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯', { pwd: 'Hello Taiji!' })} ==> ${taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯', { pwd: 'Hello Taiji!' })}`)
