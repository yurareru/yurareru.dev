<script setup lang="ts">
import type { PostCollectionItem } from '@nuxt/content';

const { post } = defineProps<{
  post: PostCollectionItem | null | undefined
  previousPath: string
}>()

if (!post) {
  throw createError({
    statusCode: 404,
  })
}
useSeoMeta({
  title: post.title,
  ogTitle: post.title,
  ogImage: `${post.path}/thumbnail.jpg`
})
</script>
<template>
  <article class="prose max-w-none" :class="post.class">
    <NuxtLink to="/articles" class="text-ctp-subtext0">{{ previousPath }}</NuxtLink><span class="text-ctp-mauve">
      /</span>
    <h1 class="text-5xl">{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template>
