<script setup lang="ts">
const navbar = useTemplateRef('navbar')
</script>
<template>
  <div class="flex flex-col min-h-dvh">
    <ClientOnly>
      <NuxtLoadingIndicator :color="navbar?.isDark ? '#cba6f7' : '#8839ef'" />
    </ClientOnly>
    <AppNavbar ref="navbar" />
    <AppTopButton />
    <main class="grow flex p-4 lg:max-w-5xl lg:mx-auto w-full">
      <slot />
    </main>
    <footer class="min-w-96 lg:w-5xl mx-auto p-4">
      <p class="text-xs text-ctp-subtext0">
        &copy; {{ new Date().getFullYear() }} Danial.
      </p>
    </footer>
  </div>
</template>
