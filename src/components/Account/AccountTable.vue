<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import DeleteButton from '@/components/Widgets/DeleteButton.vue'
import PasswordInput from '@/components/Widgets/PasswordInput.vue'
import { useAccountStore } from '@/stores/account'
import { validateField } from '@/utils/validation'
import { formatLabel, labelToString } from '@/utils/format-label'

const account_store = useAccountStore()

// Local validation states
const inputStates = ref({})
const hasUnsavedChanges = ref(false) // Track unsaved changes

// Function to update state
const setInputState = (id, field, value) => {
  if (!inputStates.value[id]) inputStates.value[id] = {}
  inputStates.value[id][field] = {
    focused: true,
    valid: validateField(field, value),
  }
  hasUnsavedChanges.value = true // Mark as unsaved
}

// Function to save updates
const saveUpdate = (account, field, value) => {
  if (!validateField(field, value)) return // Prevent invalid updates

  let updatedValue = value
  if (field === 'label') {
    updatedValue = formatLabel(value) // Convert string to array of objects
  }

  account_store.SET_ONE({ ...account, [field]: updatedValue })
  inputStates.value[account.id][field].focused = false // Remove focus after saving
  hasUnsavedChanges.value = false // Reset unsaved state after saving
}

// Warn before leaving the page
const beforeUnloadHandler = (event) => {
  if (hasUnsavedChanges.value) {
    event.preventDefault()
    event.returnValue = 'You have unsaved changes. Are you sure you want to leave?'
  }
}

onMounted(() => {
  window.addEventListener('beforeunload', beforeUnloadHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', beforeUnloadHandler)
})
</script>

<template>
  <div class="border rounded-xl shadow-xl relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-500 uppercase bg-gray-100">
        <tr>
          <th scope="col" class="px-6 py-3">Метки</th>
          <th scope="col" class="px-6 py-3">Типа записи</th>
          <th scope="col" class="px-6 py-3">Логин</th>
          <th scope="col" class="px-6 py-3">Пароль</th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="account in account_store.LIST"
          :key="account.id"
          class="bg-white border-b border-gray-200 text-gray-700"
        >
          <!-- Label Input -->
          <td class="px-6 py-4">
            <input
              :value="labelToString(account.label)"
              @input="(e) => setInputState(account.id, 'label', e.target.value)"
              @blur="(e) => saveUpdate(account, 'label', e.target.value)"
              class="w-full p-2 px-3 border border-gray-400 rounded outline-none pr-8"
              :maxlength="50"
            />
          </td>

          <!-- Type Select -->
          <td class="px-6 py-4">
            <select
              v-model="account.type"
              @change="
                account_store.SET_ONE({
                  ...account,
                  type: account.type,
                  password: account.type === 'LDAP' ? null : account.password,
                })
              "
              class="p-2 px-3 border border-gray-400 rounded outline-none"
            >
              <option value="LDAP">LDAP</option>
              <option value="Локальная">Локальная</option>
            </select>
          </td>

          <!-- Login Input -->
          <td class="px-6 py-4" :colspan="account.type !== 'Локальная' ? 2 : 1">
            <input
              v-model="account.login"
              @focus="setInputState(account.id, 'login', account.login)"
              @blur="saveUpdate(account, 'login', account.login)"
              class="w-full p-2 px-3 border border-gray-400 rounded outline-none pr-8"
              :maxlength="100"
            />
          </td>

          <!-- Password Input (Only for Локальная) -->
          <td v-if="account.type === 'Локальная'" class="px-6 py-4">
            <PasswordInput
              v-model="account.password"
              @focus="setInputState(account.id, 'password', account.password)"
              @blur="saveUpdate(account, 'password', account.password)"
              :class="{
                'border-green-500':
                  inputStates[account.id]?.password?.focused &&
                  inputStates[account.id]?.password?.valid,
                'border-red-500':
                  inputStates[account.id]?.password?.focused &&
                  !inputStates[account.id]?.password?.valid,
              }"
              :maxlength="100"
            />
          </td>

          <!-- Delete Button -->
          <td class="px-6 py-4 text-center">
            <DeleteButton @click="account_store.DELETE(account.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
