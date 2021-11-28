<script setup lang="ts">
import Tip from './common/Tip.vue'

const isFriday = (new Date().getDay()) === 5 ? '是' : '不是'
</script>

<template>
  <div class="pure-u-1-4 m-2 p-8 rounded shadow font-serif bg-white flex items-center flex-col min-h-min">
    <Tip content="今天是周五吗？"></Tip>
    <div class="text-8xl font-serif pt-10 font-bold">{{ isFriday }}</div>
  </div>
</template>

<style>

</style>
