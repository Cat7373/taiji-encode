<template lang="pug">
//- https://github.com/tailwindlabs/tailwindcss/pull/12735
component(:is="homeView", v-loading="loading", :element-loading-text="loadingMsg")
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'

const homeView = shallowRef()

onMounted(async () => {
  homeView.value  = (await import('@/MainPage.vue')).default
})
</script>
