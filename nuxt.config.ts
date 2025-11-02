import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/content',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/assets/favicon.png' }],
    },
  },
  hooks: {
    'content:file:afterParse'(ctx) {
      const { file, content } = ctx

      const wordsPerMinute = 150
      const text = typeof file.body === 'string' ? file.body : ''
      const wordCount = text.split(/\s+/).length

      content.wordCount = wordCount
      content.readingTime = Math.ceil(wordCount / wordsPerMinute)
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    vercel: {
      formats: ['image/webp'],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/local',
      },
    ],
  },
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-mathjax': {},
        },
        highlight: {
          theme: {
            default: 'catppuccin-latte',
            dark: 'catppuccin-mocha',
            light: 'catppuccin-latte',
          },
          langs: ['bash', 'cpp'],
        },
      },
    },
    experimental: {
      nativeSqlite: true,
    },
  },
})
