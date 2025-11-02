export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.warnHandler = (msg, _instance, _trace) => {
    if (msg.startsWith('Failed to resolve component: Mjx')) {
      return
    }
    if (msg.includes('mjx-container')) {
      return
    }
  }
})
