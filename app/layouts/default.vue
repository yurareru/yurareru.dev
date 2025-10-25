<script setup lang="ts">
const isDark = useDark({
  valueDark: "mocha",
  valueLight: "latte",
})
const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <nav
      class="sticky flex top-0 justify-between p-6 px-48 [&_a]:flex [&_a]:items-center [&_a]:gap-1 [&_a]:p-2 border-b border-b-ctp-surface0">
      <NuxtLink to="/">Home</NuxtLink>
      <div class="flex gap-4">
        <NuxtLink to="/portfolio">
          <Icon name="fluent:toolbox-28-regular" />Portofolio
          <span class="absolute border-ctp-blue-400 w-full bottom-0"></span>
        </NuxtLink>
        <NuxtLink to="/article">
          <Icon name="fluent:news-28-regular" />Artikel
        </NuxtLink>
        <button @click="toggleDark()" class="flex items-center p-2 cursor-pointer hover:text-ctp-blue text-xl">
          <Icon name="mingcute:sun-line" v-if="isDark" />
          <Icon name="mingcute:moon-line" v-else />
        </button>
      </div>
    </nav>
    <main class="grow w-[45rem] mx-auto flex [&>*]:w-full [&>*]:p-4">
      <slot />
    </main>
    <footer class=" w-[45rem] mx-auto p-4">
      <p class="text-xs text-ctp-subtext0">
        &copy; {{ new Date().getFullYear() }} Danial.
      </p>
    </footer>
  </div>
</template>
