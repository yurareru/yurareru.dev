<script setup lang="ts">

import Fuse from 'fuse.js'

const query = ref('')
const queryInput = ref()

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

const emit = defineEmits(['close'])

const modal = ref()
onMounted(() => {
  queryInput.value.focus()
})

onClickOutside(modal, () => emit('close'))
</script>
<template>
  <UiModal>
    <div ref="modal"
      class="absolute top-16 rounded-xl w-96 md:w-[36rem] lg:w-[64rem] max-h-[32rem] bg-ctp-mantle flex flex-col">
      <div class="flex p-4 items-center" :class="query ? 'border-b border-ctp-surface0' : ''">
        <Icon name="mingcute:search-2-line" size="24" />
        <input ref="queryInput" v-model="query" placeholder="Cari..." class="w-full p-2 outline-none rounded-xl">
        <Icon name="mingcute:close-line" size="24" class="p-4 cursor-pointer" @click="$emit('close')" />
      </div>
      <div class="overflow-scroll">
        <ul v-if="result.length" class="p-4">
          <li v-for="r in result" :key="r.item.id">
            <NuxtLink :to="r.item.id" class="flex mb-4" @click="useRouter().push(r.item.id); $emit('close')">
              <div>
                <span class="font-bold text-lg text-ctp-text">{{ r.item.title }}</span><br>
                <span class="mb-4 text-ctp-subtext0">
                  {{ r.item.content.slice(0, 250) }}...
                </span>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <p v-else-if="query" class="p-4 text-sm text-ctp-subtext0">Tidak ada hasil yang ditemukan.</p>
      </div>
      <div v-if="query" class="pb-2" />
    </div>
  </UiModal>
</template>
