<template lang="pug">
.p-2.min-h-full.bg-slate-50
  .text-center.text-2xl 太极编码器

  //- 明文内容
  fieldset.mt-2.border.rounded-md.p-2
    legend.px-2
      span 明文内容
      span.ml-2.text-sky-500.text-sm(@click="doCopy(content)") 复制
    van-field.rounded-lg(v-model="content", rows="5", autosize, type="textarea", placeholder="Hello Taiji Encode!", @update:model-value="encode")

  //- 编码内容
  fieldset.mt-2.border.rounded-md.p-2
    legend.px-2
      span 太极内容
      span.ml-2.text-sky-500.text-sm(@click="doCopy(taijiContent)") 复制
    van-field.rounded-lg(v-model="taijiContent", rows="5", autosize, type="textarea", placeholder="䷜䷭䷾䷷䷹䷭䷠䷖䷾䷭䷣䷔䷮䷑䷳䷖䷂䷯䷘䷨䷹䷸䷂䷕䷏䷇☯☯", @update:model-value="decode", :error-message="taijiErrMsg")

  //- 设置区
  fieldset.mt-2.border.rounded-md.p-2
    legend.px-2 设置
    van-field.rounded-lg(v-model="pwd", label="密码", placeholder="无密码", type="password")

  //- 说明区
  fieldset.mt-2.border.rounded-md.p-2
    legend.px-2 说明
    .text-sm.leading-6.px-2
      p 1. 输入明文内容，自动生成太极内容
      p 2. 粘贴太极内容，自动解出明文内容
      p 3. 使用密码编码，解码需用同一密码
      p
        span 4.&nbsp;
        a.text-sky-500(href="https://github.com/Cat7373/taiji-encode", target="_blank") Github Repo
</template>

<script setup>
import { ref } from 'vue'
import { showNotify } from 'vant'
import { taijiEncode, taijiDecode, isVaildTaiji } from 'taiji-encode'
import Clipboard from 'clipboard'

// 明文输入框内容
const content = ref('')
// 太极输入框内容
const taijiContent = ref('')
// 设置的密码
const pwd = ref('')
// 太极输入框的错误提示内容
const taijiErrMsg = ref('')

// 明文输入框内容变化，执行编码
const encode = () => {
  taijiContent.value = ''
  taijiErrMsg.value = ''

  taijiContent.value = taijiEncode(content.value, { pwd: pwd.value })
}

// 太极输入框内容变化，执行解码
const decode = () => {
  if (!taijiContent.value || isVaildTaiji(taijiContent.value)) {
    taijiErrMsg.value = ''
  } else {
    taijiErrMsg.value = '无效的太极编码内容，请检查'
    return
  }

  content.value = ''
  content.value = taijiDecode(taijiContent.value, { pwd: pwd.value })
}

// 复制内容
const doCopy = str => {
  Clipboard.copy(str)
  showNotify({ type: 'success', message: '复制成功' })
}
</script>
