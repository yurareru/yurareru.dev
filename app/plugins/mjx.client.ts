export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.warnHandler = (msg, _instance, _trace) => {
    if (msg.includes('mjx-container')) {
      return
    }
    console.warn(msg)
  }
})
