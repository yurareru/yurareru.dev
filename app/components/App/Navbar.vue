<script setup lang="ts">
const colorMode = useColorMode()
if (colorMode.value === 'dark') {
  colorMode.preference = 'mocha'
} else if (colorMode.value === 'light') {
  colorMode.preference = 'latte'
}

await nextTick()
const isDark = computed({
  get: () => colorMode.value === 'mocha',
  set: (value) => {
    colorMode.preference = value ? 'mocha' : 'latte'
  }
})
defineExpose({ isDark })

const checkbox = useTemplateRef('checkbox')

const [searchIsActive, toggleSearch] = useToggle()

const updateHtmlClass = () => {
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
  html.classList.toggle('light', !isDark.value)
}

onMounted(() => {
  updateHtmlClass()
  watch(isDark, updateHtmlClass)
})
</script>
<template>
  <nav class="navbar sticky top-0 bg-base-100 border-b border-secondary z-50">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-primary">
        <Icon name="local:logo" />
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="hidden lg:flex">
        <NuxtLink to="/portfolio" class="btn btn-ghost">
          <Icon name="fluent:toolbox-32-regular" size="24" />
          Portofolio
        </NuxtLink>
        <NuxtLink to="/articles" class="btn btn-ghost">
          <Icon name="fluent:news-28-regular" size="24" />
          Artikel
        </NuxtLink>
      </div>
      <div class="btn btn-circle btn-ghost" @click="toggleSearch()">
        <Teleport to="#teleports">
          <Transition name="fade">
            <AppSearchModal v-if="searchIsActive" @close="toggleSearch()" />
          </Transition>
        </Teleport>
        <Icon name="mingcute:search-2-line" size="24" />
      </div>
      <label class="swap swap-rotate btn btn-circle btn-ghost">
        <input v-model="isDark" type="checkbox" />
        <Icon name="mingcute:sun-line" class="swap-on" size="24" />
        <Icon name="mingcute:moon-line" class="swap-off" size="24" />
      </label>
      <details class="dropdown dropdown-end lg:hidden">
        <summary @click="checkbox!.checked = !checkbox!.checked" class="btn btn-circle btn-ghost swap swap-rotate">
          <input ref="checkbox" type="checkbox" />
          <Icon name="mingcute:menu-line" size="24" class="swap-off" />
          <Icon name="mingcute:close-line" size="24" class="swap-on" />
        </summary>
        <ul class="menu dropdown-content bg-base-200 rounded-xl">
          <li>
            <NuxtLink to="/portfolio" class="btn btn-ghost justify-start">
              <Icon name="fluent:toolbox-32-regular" size="24" />
              Portofolio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles" class="btn btn-ghost justify-start">
              <Icon name="fluent:news-28-regular" size="24" />
              Artikel
            </NuxtLink>
          </li>
        </ul>
      </details>
    </div>
  </nav>
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
