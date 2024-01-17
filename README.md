# Taiji Encode
太极编码器

[![NPM version][npm-image]][npm-url]
[![Install size][install-size-image]][install-size-url]
[![NPM bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![NPM downloads][npm-download-image]][npm-download-url]

## Demos
* [taichi.wallleap.cn](https://taichi.wallleap.cn)

## 安装
```sh
npm install taiji-encode
```

## 使用
```javascript
import { taijiEncode, taijiDecode, isVaildTaiji } from 'taiji-encode'

// 普通编码:
console.log(taijiEncode('Hello Taiji Encode!'))
// ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯
console.log(taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
// Hello Taiji Encode!
console.log(taijiEncode('你好太极！'))
// ䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗
console.log(taijiDecode('䷘䷵䷸䷖䷘䷮䷯䷌䷘䷮䷜䷿䷘䷔䷅䷗䷉䷉䷺䷗'))
// 你好太极！

// 验证是否为太极编码:
console.log(isVaildTaiji('你好太极！'))
// false
console.log(isVaildTaiji('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
// true
console.log(isVaildTaiji('Hello ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯'))
// false

// 直接编解码 Base64:
console.log(taijiEncode('SGVsbG8gVGFpamkgRW5jb2RlIQ==', { base64: true }))
// ䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯
console.log(taijiDecode('䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯', { base64: true }))
// SGVsbG8gVGFpamkgRW5jb2RlIQ==

// 简单加解密:
// 使用简单的置换算法，难以对抗专业的密码学攻击，仅供娱乐，专业用途应先通过 AES 等专业算法加密，然后再进行编码
console.log(taijiEncode('Hello Taiji Encode!', { pwd: 'Hello Taiji!' }))
// ䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯
console.log(taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯'))
// �yo|/ٖ�H4�L��Z�
console.log(taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯', { pwd: 'abcdef' }))
// c3�G��pxUC��
console.log(taijiDecode('䷗䷪䷏䷦䷛䷯䷌䷠䷵䷌䷑䷯䷘䷳䷖䷴䷘䷘䷗䷽䷷䷢䷩䷮䷺䷃☯☯', { pwd: 'Hello Taiji!' }))
// Hello Taiji Encode!
```

## License
[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/taiji-encode.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/taiji-encode
[install-size-image]: https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=taiji-encode&query=$.install.pretty&label=install%20size&style=flat-square
[install-size-url]: https://packagephobia.now.sh/result?p=taiji-encode
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/taiji-encode?style=flat-square
[npm-bundle-size-url]: https://bundlephobia.com/package/taiji-encode@latest
[npm-download-image]: https://img.shields.io/npm/dm/taiji-encode.svg?style=flat-square
[npm-download-url]: https://npm-stat.com/charts.html?package=taiji-encode
