<script setup>
defineProps({ modelValue: String, isDuplicate: Boolean })

defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    class="w-full p-2 px-3 border rounded outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300"
    :class="{
      'border-red-500 focus:ring-red-300 focus:border-red-300': isDuplicate,
      'border-gray-400': !isDuplicate,
    }"
    :maxlength="100"
  />
</template>
