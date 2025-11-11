<script setup lang="ts">
import type { PostCollectionItem } from '@nuxt/content';

const { post } = defineProps<{
  post: PostCollectionItem | null | undefined
  previousPathTitle: string,
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
  <article class="prose lg:prose-lg max-w-none" :class="post.class">
    <NuxtLink :to="previousPath" class="text-neutral">{{ previousPathTitle }}</NuxtLink><span class="text-accent">
      /</span>
    <h1 class="text-5xl">{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template>
