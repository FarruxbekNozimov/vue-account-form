<script setup>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue'
import DeleteButton from '@/components/Widgets/DeleteButton.vue'
import PasswordInput from '@/components/Widgets/PasswordInput.vue'
import { useAccountStore } from '@/stores/account'
import { validateField } from '@/utils/validation'
import { formatLabel, labelToString } from '@/utils/format-label'

const account_store = useAccountStore()
const loginInputs = ref({}) // Track login input references

// Function to save updates with validation
const saveUpdate = (account, field, value) => {
  if (!validateField(field, value)) return

  if (field === 'login') {
    const isDuplicate = account_store.LIST.some(
      (acc) => acc.id !== account.id && acc.login === value,
    )
    if (isDuplicate) {
      alert('Этот логин уже используется!')
      setTimeout(() => {
        loginInputs.value[account.id]?.focus()
      }, 100)
      return
    }
  }

  let updatedValue = field === 'label' ? formatLabel(value) : value
  account_store.SET_ONE({ ...account, [field]: updatedValue })
}

// Check if password column should be shown
const showPasswordColumn = computed(() =>
  account_store.LIST.some((account) => account.type !== 'LDAP'),
)
</script>

<template>
  <div class="border rounded-xl shadow-xl relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-500 uppercase bg-gray-100">
        <tr>
          <th class="px-6 py-3 w-[20%]">Метки</th>
          <th class="px-6 py-3 w-[20%]">Типа записи</th>
          <th class="px-6 py-3 w-[20%]">Логин</th>
          <th class="px-6 py-3 w-[20%]">
            {{ showPasswordColumn || !account_store.LIST.length ? 'Пароль' : '' }}
          </th>
          <th class="px-6 py-3 w-[10%]"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="account in account_store.LIST"
          :key="account.id"
          class="bg-white border-b border-gray-300 text-gray-700"
        >
          <!-- Label Input -->
          <td class="px-6 py-4">
            <input
              :value="labelToString(account.label)"
              @blur="(e) => saveUpdate(account, 'label', e.target.value)"
              class="w-full p-2 px-3 border-2 border-gray-400 rounded outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300"
              :maxlength="50"
            />
          </td>

          <!-- Account Type -->
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
              class="p-2 px-3 border border-gray-400 rounded outline-none bg-white"
            >
              <option value="LDAP">LDAP</option>
              <option value="Локальная">Локальная</option>
            </select>
          </td>

          <!-- Account Login Input -->
          <td class="px-6 py-4" :colspan="account.type !== 'Локальная' ? 2 : 1">
            <input
              ref="(el) => (loginInputs.value[account.id] = el)"
              v-model="account.login"
              @blur="saveUpdate(account, 'login', account.login)"
              class="w-full p-2 px-3 border border-gray-400 rounded outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300"
              :maxlength="100"
            />
          </td>

          <!-- Account Password Input (Only for Локальная) -->
          <td v-if="account.type === 'Локальная'" class="px-6 py-4">
            <PasswordInput
              v-model="account.password"
              @blur="saveUpdate(account, 'password', account.password)"
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
