<script setup lang="ts">
import { ref } from 'vue'
import { Bookmark, getBookmark } from '../apis/bookmark'

const bookmarks = ref<Array<Bookmark>>()
const init = () => {
  getBookmark().then(res => {
    bookmarks.value = res.data.list
  })
}

init()
</script>

<template>
  <div class="pure-u-1-4 rounded shadow bg-white font-serif divide-y text-xs m-2">
    <div class="p-2 bg-gray-100 text-center text-sm">无签</div>
    <div v-for="item in bookmarks" :key="item.pk" class="p-2 hover:bg-gray-100 hover:text-pink-400 truncate">
      <a :href="item.fields.url" target="_blank">{{ item.fields.label }}</a>
    </div>
  </div>
</template>

<style scoped>

</style>
