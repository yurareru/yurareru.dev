<script setup lang="ts">
defineProps<{
  tags: string[],
}>()
</script>
<template>
  <div class="flex gap-2">
    <!-- <NuxtLink v-for="tag in tags" class="border border-accent text-ctp-mauve rounded-lg px-1.5 py-0.5" -->
    <NuxtLink v-for="tag in tags" class="border border-accent text-accent rounded-lg px-1.5 py-0.5" :to="'/tags/' + tag"
      @click.stop>
      {{ tag }}
    </NuxtLink>
  </div>
</template>
