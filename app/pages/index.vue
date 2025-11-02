<script setup lang="ts">
</script>
<template>
  <div class="flex items-center justify-center flex-col w-full">
    <NuxtImg format="webp" src="/assets/profile.webp" class="w-40 rounded-full" placeholder alt="profile" preload />
    <h1 class="text-center font-bold text-4xl my-2 text-ctp-blue">Danial Al Hasya Ananto</h1>
    <p class="text-center text-ctp-subtext1 max-w-[32rem] lg:text-lg">Pelajar di MAN 1 Jepara yang aktif dalam
      berkompetisi di bidang Informatika dan Matematika.
    </p>
    <ul class="text-ctp-subtext0 my-4 lg:text-lg">
      <li>
        <Icon name="twemoji:2nd-place-medal" alt="2" /> OSN-K Jepara 2024 Bidang Informatika
      </li>
      <li>
        <Icon name="twemoji:2nd-place-medal" alt="2" /> OSMA Jawa Tengah 2025 Bidang Informatika
      </li>
      <li>
        <Icon name="twemoji:1st-place-medal" alt="1" /> OSN-K Jepara 2025 Bidang Informatika
      </li>
    </ul>
    <div class="flex gap-2 *:text-3xl *:transition-all *:duration-300 *:hover:text-ctp-blue">
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
