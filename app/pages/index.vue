<script setup lang="ts">
</script>
<template>
  <div class="flex items-center justify-center flex-col w-full">
    <NuxtImg format="webp" src="/assets/profile.jpg" class="w-40 rounded-full" placeholder alt="profile" />
    <h1 class="font-bold text-3xl my-2 text-ctp-blue">Danial Al Hasya Ananto</h1>
    <p class="text-center text-ctp-subtext1">
      Halo nama saya Danial Al Hasya Ananto. <br>
      Saya adalah seorang pelajar di MAN 1 Jepara.
    </p>
    <div class="flex gap-2 mt-4 [&_a]:text-3xl [&_a]">
      <NuxtLink to="https://github.com/yurareru" target="_blank" alt="GitHub">
        <Icon name="mingcute:github-line" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/yurareru/" target="_blank" alt="LinkedIn">
        <Icon name="mingcute:linkedin-line" />
      </NuxtLink>
      <NuxtLink to="mailto:danialananto@protonmail.com" target="_blank" alt="Email">
        <Icon name="mingcute:mail-line" />
      </NuxtLink>
    </div>
  </div>
</template>
