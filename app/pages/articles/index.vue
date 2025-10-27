<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryCollection('post')
    .order('date', 'DESC')
    .where('type', '=', 'article')
    .select('title', 'path', 'date', 'wordCount', 'readingTime', 'tags')
    .all()
})

useSeoMeta({
  title: 'Artikel-artikel',
  ogTitle: 'Artikel-artikel',
  description: 'Artikel-artikel yang ditulis ketika gabut.',
  ogDescription: 'Artikel-artikel yang ditulis ketika gabut.'
})
</script>
<template>
  <section>
    <h1 class="text-4xl text-ctp-blue font-bold mb-4">Artikel-artikel</h1>
    <PostCollection :posts />
  </section>
</template>
