<script setup>
defineProps({
  modelValue: String,
})

defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    class="w-full p-2 px-3 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300"
    :maxlength="50"
  />
</template>
