import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        serif: ['OverPass', 'serif'],
      },
    },
  },
})
