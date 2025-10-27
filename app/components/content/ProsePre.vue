<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
const { copy, copied, isSupported } = useClipboard()
</script>
<template>
  <div class="bg-ctp-mantle rounded-xl mb-8 relative max-w-[calc(100vw-2rem)]">
    <!-- <code class="absolute text-xl m-4 text-ctp-text">{{ props.language }}</code> -->
    <div v-if="isSupported" class="sticky top-24 flex p-4 justify-end">
      <Icon @click="copy(props.code)" name="mingcute:clipboard-line" class="text-2xl hover:text-ctp-blue cursor-pointer"
        :class="!copied ? 'text-ctp-text' : 'text-ctp-green'" />
    </div>
    <pre :class="props.class" class="not-prose overflow-scroll px-4 text-xs lg:text-base">
      <slot />
    </pre>
  </div>
</template>
<style>
pre code .line {
  display: block;
}
</style>
