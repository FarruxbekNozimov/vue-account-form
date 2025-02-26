<script setup>
import { ref } from 'vue'
import { useAccountStore } from '@/stores/account-form'

import DeleteButton from './Widgets/DeleteButton.vue'
import PasswordInput from './Widgets/PasswordInput.vue'

const account_store = useAccountStore()

const showPasswords = ref({}) // Store visibility for each account
</script>

<template>
  <div class="border rounded-xl shadow-xl relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-slate-200">
        <tr>
          <th scope="col" class="px-6 py-3">Метки</th>
          <th scope="col" class="px-6 py-3">Типа записи</th>
          <th scope="col" class="px-6 py-3">Логин</th>
          <th scope="col" class="px-6 py-3">Пароль</th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr
          v-for="account in account_store.LIST"
          :key="account.id"
          class="bg-white border-b border-gray-200 text-gray-700"
        >
          <!-- Label Input -->
          <td class="px-6 py-4">
            <input
              v-model="account.label"
              type="text"
              class="w-full p-1 px-3 border border-gray-400 rounded outline-none"
              placeholder="Enter label"
            />
          </td>

          <!-- Type Select -->
          <td class="px-6 py-4">
            <select
              v-model="account.type"
              class="p-1 px-3 border border-gray-400 rounded outline-none"
            >
              <option value="LDAP">LDAP</option>
              <option value="Локальная">Локальная</option>
            </select>
          </td>

          <!-- Login Input (Expands if password is hidden) -->
          <td class="px-6 py-4" :colspan="account.type !== 'Локальная' ? 2 : 1">
            <input
              v-model="account.login"
              type="text"
              class="w-full p-1 px-3 border border-gray-400 rounded outline-none"
              placeholder="Enter login"
            />
          </td>

          <!-- Password (Only shown for LDAP, but disabled) -->
          <td v-if="account.type === 'Локальная'" class="px-6 py-4">
            <PasswordInput v-model="account.password" />
          </td>

          <!-- Delete Button (Using DeleteButton.vue) -->
          <td class="px-6 py-4 text-center">
            <DeleteButton @click="account_store.DELETE(account.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
