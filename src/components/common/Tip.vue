<template>
  <div class="tip text-center bg-yellow-300 w-60 px-6 py-2 rounded-full text-2xl">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'Tip',
  props: {
    content: {
      default: 'Tip...',
      type: String
    }
  }
}
</script>

<style scoped>
.tip {
  position: relative;
  font-family: Helvetica,serif;
}
.tip::after {
  content: '';
  display: block;
  top: 48px;
  right: calc(7.5rem - 5px);
  position: absolute;
  border-width: 10px 6px 0 6px;
  border-color: #fcd34d transparent transparent transparent;
}
</style>
