<script setup lang="ts">
import { ref } from 'vue'

let TechStacks = ref([
  {
    label: 'Vue',
    url: 'https://v3.cn.vuejs.org/',
  },
  {
    label: 'Vite',
    url: 'https://cn.vitejs.dev/',
  },
  {
    label: 'TypeScript',
    url: 'https://www.typescriptlang.org/zh/',
  },
  {
    label: 'WindiCSS',
    url: 'https://windicss.org/',
  },
])

let author = ref('Zhima')
</script>

<template>
  <footer class="text-center leading-loose font-serif">
    <div>
      Powered by
      <template v-for="(item, index) in TechStacks">
        <span v-if="index !== TechStacks.length - 1">
          <a :href="item.url" class="hover:text-pink-300 text-pink-500" target="_blank">{{ item.label }}</a>,
        </span>
        <span v-else>and <a :href="item.url" class="hover:text-pink-300 text-pink-500" target="_blank">{{ item.label }}</a>.</span>
      </template>
    </div>
    <div>{{ author }} © 2020-{{ new Date().getFullYear() }}</div>
  </footer>
</template>
