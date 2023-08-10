# Taiji Encode
太极编码器

## 使用 Taiji Encode
```sh
npm install taiji-encode
```

## 使用示例
```javascript
import { taijiEncode, taijiDecode } from 'taiji-encode'

console.log(taijiEncode('Hello Taiji Encode!'))
console.log(taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
console.log(taijiEncode('你好太极！'))
console.log(taijiDecode('䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗'))

// output:
// ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯
// Hello Taiji Encode!
// ䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗
// 你好太极！
```

## TODO
* 支持自定义字符排序规则，用于简单混淆
