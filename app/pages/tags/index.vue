<script setup lang="ts">
const { data } = await useAsyncData('tags', () => {
  return $fetch('/api/tags')
})
</script>
<template>
  <div class="w-full">
    <h1 class="text-4xl text-primary font-bold mb-4">Label&ndash;label</h1>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <NuxtLink v-for="tag in data" :key="tag.name" :to="'/tags/' + tag.name"
        class="flex p-4 border border-accent rounded-xl h-fit justify-between">
        <span class="grow">
          {{ tag.name }}
        </span>
        <span>
          {{ tag.count }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
