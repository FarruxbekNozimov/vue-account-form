<script setup>
import { ref } from 'vue'
import { Eye, EyeClosed } from 'lucide-vue-next'

// Props for v-model and disabled state
defineProps({ modelValue: String, disabled: Boolean })

// Emit function for v-model
const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
<template>
  <div class="relative">
    <input
      autocomplete="new-password"
      autocapitalize="off"
      spellcheck="false"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :type="showPassword ? 'text' : 'password'"
      :disabled="disabled"
      class="w-full p-2 px-3 border border-gray-400 rounded outline-none pr-8 focus:ring-1 focus:ring-green-300 focus:border-green-300"
      :class="{ 'bg-gray-100 cursor-not-allowed': disabled }"
    />
    <button
      v-if="!disabled"
      type="button"
      @click="togglePassword"
      class="absolute inset-y-0 right-2 flex items-center text-gray-500"
    >
      <Transition name="fade-scale" mode="out-in">
        <component :is="showPassword ? Eye : EyeClosed" :key="showPassword" />
      </Transition>
    </button>
  </div>
</template>

<style scoped>
/* Transition effect when password eye changed */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
