<script setup lang="ts">
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="fixed inset-0 z-[100] flex justify-center items-center backdrop-blur-sm">
    <slot />
  </div>
</template>
