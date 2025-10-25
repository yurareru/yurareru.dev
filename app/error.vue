<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({
      statusCode: 500,
      fatal: false,
      unhandled: false,
    }),
  },
})
</script>
<template>
  <NuxtLayout>
    <div class="flex items-center justify-center h-screen flex-col">
      <p class="text-2xl md:text-4xl">
        <b>{{ error?.statusCode }}</b> {{ error?.statusMessage }}
      </p>
    </div>
  </NuxtLayout>
</template>
