<script setup lang="ts">
const route = useRoute()

const isDark = useDark({
  valueDark: "dark mocha",
  valueLight: "light latte",
})
const toggleDark = useToggle(isDark)
const { y } = useWindowScroll()

const [searchIsOpen, toggleSearch] = useToggle(false)

const mounted = ref(false)
onMounted(() => mounted.value = true)
</script>
<template>
  <div class="flex flex-col min-h-dvh relative">
    <Teleport to="#teleports">
      <Transition name="fade">
        <SearchModal v-if="searchIsOpen" @close="toggleSearch" />
      </Transition>
    </Teleport>
    <ClientOnly>
      <NuxtLoadingIndicator :color="isDark ? '#cba6f7' : '#8839ef'" />
    </ClientOnly>
    <nav class="bg-ctp-base sticky flex top-0 justify-between p-4 lg:px-48 [&_a]:flex
      [&_a]:items-center [&_a]:gap-1 [&_a]:p-2 border-b border-b-ctp-surface0
      z-50 **:transition-all **:duration-300">
      <NuxtLink to="/" class="hover:text-ctp-blue">
        <Icon name="local:logo" />
      </NuxtLink>
      <div class="flex">
        <NuxtLink to="/portfolio" class="hover:text-ctp-blue"
          :class="route.name === 'portfolio' ? 'text-ctp-blue' : ''">
          <Icon name="fluent:toolbox-28-regular" />Portofolio
        </NuxtLink>
        <NuxtLink to="/articles" class="hover:text-ctp-blue" :class="route.name === 'articles' ? 'text-ctp-blue' : ''">
          <Icon name="fluent:news-28-regular" />Artikel
        </NuxtLink>
        <button class="cursor-pointer hover:text-ctp-blue text-xl flex items-center p-2" @click="toggleSearch()">
          <Icon name="mingcute:search-2-line" class="align-middle" />
        </button>
        <button class="cursor-pointer hover:text-ctp-blue text-xl flex items-center p-2" @click="toggleDark()">
          <Icon v-if="mounted" :name="isDark ? 'mingcute:sun-line' : 'mingcute:moon-line'" />
          <Icon v-else name="mingcute:sun-line" />
        </button>
      </div>
    </nav>
    <div v-if="route.path.includes('articles')"
      class="pointer-events-none absolute h-[calc(100%-120dvh)] bottom-4 right-4 z-40">
      <div
        class="sticky top-[calc(100dvh-4rem)] bg-ctp-mantle rounded-full size-12 flex items-center justify-center cursor-pointer pointer-events-auto"
        @click="y = 0">
        <Icon name="mingcute:arrow-up-fill" size="2rem" />
      </div>
    </div>
    <main class="grow flex p-4 lg:max-w-[64rem] lg:mx-auto w-full overflow-auto">
      <slot />
    </main>
    <footer class="min-w-96 lg:w-[64rem] mx-auto p-4">
      <p class="text-xs text-ctp-subtext0">
        &copy; {{ new Date().getFullYear() }} Danial.
      </p>
    </footer>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
