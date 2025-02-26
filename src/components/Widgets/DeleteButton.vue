<script setup>
import { Trash2 } from 'lucide-vue-next'

defineProps({
  size: { type: String, default: 'w-5 h-5' },
})

const emit = defineEmits(['delete'])
</script>

<template>
  <button
    @click="emit('delete')"
    type="button"
    class="text-red-600 hover:bg-red-100 rounded-lg p-2 transition duration-200"
  >
    <Trash2 class="w-5 h-5 text-red-500" />
  </button>
</template>
