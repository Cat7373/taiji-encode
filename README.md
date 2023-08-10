# Taiji Encode
太极编码器

[![NPM version][npm-image]][npm-url]

## 使用 Taiji Encode
```sh
npm install taiji-encode
```

```javascript
import { taijiEncode, taijiDecode } from 'taiji-encode'

console.log(taijiEncode('Hello Taiji Encode!'))
// 输出: ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯
console.log(taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
// 输出: Hello Taiji Encode!
console.log(taijiEncode('你好太极！'))
// 输出: ䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗
console.log(taijiDecode('䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗'))
// 输出: 你好太极！
```

## TODO
* 支持自定义字符排序规则，用于简单混淆

[npm-image]: https://img.shields.io/npm/v/taiji-encode.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/taiji-encode
