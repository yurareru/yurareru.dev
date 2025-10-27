<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
  error: {
    type: Object as () => NuxtError
  },
})
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col">
      <h1 class="text-4xl font-bold text-ctp-red">
        Kesalahan {{ error?.statusCode }}
      </h1>
      <p class="">
        {{
          error?.statusCode === 404 ? 'Halaman tidak ditemukan.'
            : error?.statusMessage || 'Terjadi kesalahan yang tidak diketahui.'
        }}
      </p>
    </div>
  </NuxtLayout>
</template>
