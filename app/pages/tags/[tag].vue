<script setup lang="ts">
const tag = useRoute().params.tag
const { data: posts } = await useAsyncData(`tag-${tag}`, () => {
  return queryCollection('post')
    .order('date', 'DESC')
    .where('tags', 'LIKE', `%"${tag}"%`)
    .select('title', 'path', 'date', 'wordCount', 'readingTime', 'tags')
    .all()
})

</script>
<template>
  <section>
    <h1 class="text-4xl text-ctp-blue font-bold mb-4">{{ tag }}</h1>
    <PostCollection :posts />
  </section>
</template>
