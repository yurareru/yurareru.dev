<script setup lang="ts">

import Fuse from 'fuse.js'

const query = ref('')
const queryInput = useTemplateRef('queryInput')

const { data } = await useAsyncData('search-data', () =>
  queryCollectionSearchSections('post')
)

const fuse = computed(() =>
  data.value
    ? new Fuse(data.value, {
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'titles', weight: 0.3 },
        { name: 'content', weight: 0.2 }
      ],
      includeScore: true,
      threshold: 0.35
    })
    : null
)

const result = computed(() =>
  query.value && fuse.value
    ? fuse.value.search(query.value).slice(0, 10)
    : []
)

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
const emit = defineEmits(['close'])

const modal = useTemplateRef('modal')
onMounted(() => {
  queryInput.value?.focus()
})

onClickOutside(modal, () => emit('close'))
</script>
<template>
  <div class="fixed inset-0 z-100 flex justify-center items-center backdrop-blur-sm">
    <div ref="modal" class="absolute top-16 bg-base-200 flex flex-col w-96 max-h-128 md:w-2xl p-4 rounded-xl">
      <div>
        <label class="input input-ghost bg-transparent outline-none w-full">
          <Icon name="mingcute:search-2-line" size="24" />
          <input ref="queryInput" v-model="query" type="text" placeholder="Cari...">
          <Icon @click="$emit('close')" name="mingcute:close-line" size="24" class="btn btn-circle btn-ghost" />
        </label>
      </div>
      <div v-if="result.length" class="overflow-scroll border-t border-secondary mt-4 pt-4">
        <ul>
          <li v-for="r in result" :key="r.item.id">
            <NuxtLink :to="r.item.id" class="flex mb-4 w-full pr-2"
              @click="useRouter().push(r.item.id); $emit('close')">
              <div>
                <span class="font-bold text-lg">{{ r.item.title }}</span><br>
                <span class="mb-4 text-neutral">
                  {{ r.item.content.slice(0, 250) }}...
                </span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
