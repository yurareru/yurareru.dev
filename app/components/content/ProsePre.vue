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
  <div class="bg-base-200 flex rounded-xl max-w-[calc(100vw-2rem)] relative">
    <pre :class="props.class" class="not-prose grow px-4 overflow-x-scroll text-sm">
      <slot />
    </pre>
    <div v-if="isSupported" class="absolute right-0 h-full pointer-events-none p-1">
      <div @click="copy(props.code)" class="sticky top-20 btn btn-circle pointer-events-auto"
        :class="!copied ? '' : 'btn-success'">
        <Icon name="mingcute:clipboard-line" size="24" />
      </div>
    </div>
  </div>
</template>
<style>
pre code .line {
  display: block;
}
</style>
