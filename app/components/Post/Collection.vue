<script setup lang="ts">
import type { PostCollectionItem } from '@nuxt/content';

defineProps<{
  posts: Pick<PostCollectionItem, "title" | "path" | "date" | "wordCount" | "readingTime" | "tags">[] | undefined
}>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="post in posts" :key="post.path" @click="useRouter().push(post.path)"
      class="bg-ctp-mantle rounded-xl cursor-pointer flex flex-col h-72 overflow-hidden">
      <NuxtLink :to="post.path" class="h-32 overflow-hidden">
        <NuxtImg :src="`${post.path}/thumbnail.jpg`" :placeholder="[720, 480, 5, 5]" format="webp"
          class="bg-cover bg-center w-full" />
      </NuxtLink>
      <NuxtLink :to="post.path" class="text-ctp-blue text-xl font-bold p-2">{{ post.title }}</NuxtLink>
      <div class="flex flex-wrap grow px-2">
        <div class="text-[0.9rem]">
          <span class="text-ctp-subtext1">{{ formatDate(post.date) }}</span>
          <span class="text-ctp-mauve mx-1">•</span>
          <span class="text-ctp-subtext1">{{ post.wordCount }} kata</span>
          <span class="text-ctp-mauve mx-1">•</span>
          <span class="text-ctp-subtext1">~{{ post.readingTime }} menit</span>
        </div>
      </div>
      <div class="flex p-4 justify-end">
        <PostTags :tags="post.tags" />
      </div>
    </div>
  </div>
</template>
