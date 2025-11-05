<script setup lang="ts">
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`articles-${slug}`, () => {
  return queryCollection('post').path(`/articles/${slug}`).first()
})

</script>

<template>
  <Post :post previous-path-title="Artikel&ndash;artikel" previous-path="/articles" />
</template>
