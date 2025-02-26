<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LabelInput from '@/components/Widgets/LabelInput.vue'
import LoginInput from '@/components/Widgets/LoginInput.vue'
import PasswordInput from '@/components/Widgets/PasswordInput.vue'
import DeleteButton from '@/components/Widgets/DeleteButton.vue'
import { labelToString } from '../../utils/format-label.ts'

defineProps({ account: Object, isDuplicateLogin: Function })

defineEmits(['update-label', 'save-update', 'update-type', 'update-login', 'delete-account'])

// Track unsaved changes
const hasUnsavedChanges = ref(false)

const handleInputChange = () => {
  hasUnsavedChanges.value = true
}
const handleSave = () => {
  hasUnsavedChanges.value = false
}

// Warn before leaving the page
const beforeUnloadHandler = (event) => {
  if (hasUnsavedChanges.value) {
    event.preventDefault()
    event.returnValue = 'You have unsaved changes. Are you sure you want to leave?'
  }
}

// Add event listener on mount
onMounted(() => {
  window.addEventListener('beforeunload', beforeUnloadHandler)
})

// Remove event listener on unmount
onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', beforeUnloadHandler)
})
</script>

<template>
  <tr class="bg-white border-b border-gray-300 text-gray-700">
    <!-- Label Input -->
    <td class="px-6 py-4">
      <LabelInput
        :modelValue="labelToString(account.label)"
        @update:modelValue="
          (value) => {
            $emit('update-label', account, value)
            handleInputChange()
          }
        "
        @blur="
          (value) => {
            $emit('save-update', account, 'label', value)
            handleSave()
          }
        "
      />
    </td>

    <!-- Account Type -->
    <td class="px-6 py-4">
      <select
        v-model="account.type"
        @change="$emit('update-type', account)"
        class="p-2 px-3 border border-gray-400 rounded outline-none bg-white"
      >
        <option value="LDAP">LDAP</option>
        <option value="Локальная">Локальная</option>
      </select>
    </td>

    <!-- Account Login Input -->
    <td class="px-6 py-4" :colspan="account.type !== 'Локальная' ? 2 : 1">
      <LoginInput
        :modelValue="account.login"
        :isDuplicate="isDuplicateLogin(account)"
        @update:modelValue="
          (value) => {
            $emit('update-login', account, value)
            handleInputChange()
          }
        "
        @blur="
          (value) => {
            $emit('save-update', account, 'login', value)
            handleSave()
          }
        "
      />
    </td>

    <!-- Account Password Input (Only for Локальная) -->
    <td v-if="account.type === 'Локальная'" class="px-6 py-4">
      <PasswordInput
        v-model="account.password"
        @blur="
          (value) => {
            $emit('save-update', account, 'password', value)
            handleSave()
          }
        "
      />
    </td>

    <!-- Delete Button -->
    <td class="px-6 py-4 text-center">
      <DeleteButton @click="$emit('delete-account', account.id)" />
    </td>
  </tr>
</template>
