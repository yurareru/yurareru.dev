<template>
  <div class="hero">
    <div class="hero-content flex-col gap-0">
      <NuxtImg format="webp" src="/assets/profile.webp" class="w-40 rounded-full" placeholder alt="profile" preload />
      <h1 class="text-center font-bold text-4xl my-2 text-primary">Danial Al Hasya Ananto</h1>
      <p class="text-center text-ctp-subtext1 max-w-lg lg:text-lg">Pelajar di MAN 1 Jepara yang aktif dalam
        berkompetisi di bidang Informatika dan Matematika.
      </p>
      <ul class="text-neutral my-4 lg:text-lg">
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
      <div class="[&_a]:btn [&_a]:btn-circle [&_a]:btn-ghost">
        <NuxtLink to="https://github.com/yurareru" target="_blank" alt="GitHub">
          <Icon name="mingcute:github-line" size="24" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/yurareru/" target="_blank" alt="LinkedIn">
          <Icon name="mingcute:linkedin-line" size="24" />
        </NuxtLink>
        <NuxtLink to="mailto:danialananto@protonmail.com" target="_blank" alt="Email">
          <Icon name="mingcute:mail-line" size="24" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
