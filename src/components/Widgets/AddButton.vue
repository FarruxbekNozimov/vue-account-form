<script setup>
import { Plus } from 'lucide-vue-next'

defineProps({
  size: { type: String, default: 'w-5 h-5' },
})

const emit = defineEmits(['add'])
</script>

<template>
  <button
    @click="emit('add')"
    type="button"
    class="text-slate-600 hover:bg-slate-100 rounded-xl p-2 border-2 border-gray-400 transition duration-200"
  >
    <Plus class="w-8 h-8 text-slate-500" />
  </button>
</template>
