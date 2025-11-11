<script setup lang="ts">
const { y } = useWindowScroll()
const router = useRouter()
</script>
<template>
  <Transition>
    <div v-show="y > 100" class="fixed bottom-4 right-4 btn btn-circle btn-xl z-40"
      @click="y = 0; router.replace({ hash: '' })">
      <Icon name="mingcute:arrow-up-fill" size="24" />
    </div>
  </Transition>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease, opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
