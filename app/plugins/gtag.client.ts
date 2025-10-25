export default defineNuxtPlugin(() => {
  const firstScript = document.createElement('script')
  firstScript.async = true
  firstScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KD6DR4MKBL'
  document.head.appendChild(firstScript)

  const secondScript = document.createElement('script')
  secondScript.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KD6DR4MKBL');`
  document.head.appendChild(secondScript)
})
