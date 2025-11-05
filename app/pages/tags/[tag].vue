<script setup lang="ts">
const tag = useRoute().params.tag
const { data: posts } = await useAsyncData(`tag-${tag}`, () => {
  return queryCollection('post')
    .order('date', 'DESC')
    .where('tags', 'LIKE', `%"${tag}"%`)
    .select('title', 'path', 'date', 'wordCount', 'readingTime', 'tags')
    .all()
})

const tagFormatted = toStringValue(tag)

useSeoMeta({
  title: tagFormatted,
  ogTitle: tagFormatted,
  description: 'Artikel dengan label ' + tag,
  ogDescription: 'Artikel dengan label ' + tag,
})

</script>
<template>
  <section>
    <NuxtLink to="/tags" class="text-ctp-subtext0">Label&ndash;label</NuxtLink><span class="text-ctp-mauve">
      /</span>
    <h1 class="text-4xl text-ctp-blue font-bold mb-4">{{ tag }}</h1>
    <PostCollection :posts />
  </section>
</template>
