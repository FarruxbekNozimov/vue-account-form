<script setup>
import { useAccountStore } from '@/stores/account-form'
import { storeToRefs } from 'pinia'

const account_store = useAccountStore()
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
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="account in account_store.LIST"
          :key="account.id"
          class="bg-white border-b border-gray-200"
        >
          <!-- Label -->
          <td class="px-6 py-4">
            <input
              v-model="account.label"
              type="text"
              class="w-full p-1 border rounded outline-none"
              placeholder="Enter label"
            />
          </td>

          <!-- Account Type (Disabled) -->
          <td class="px-6 py-4">
            <select v-model="account.type" class="w-full p-1 border rounded outline-none">
              <option value="LDAP">LDAP</option>
              <option value="Локальная">Локальная</option>
            </select>
          </td>

          <!-- Login -->
          <td class="px-6 py-4">
            <input
              v-model="account.login"
              type="text"
              class="w-full p-1 border rounded outline-none"
              placeholder="Enter login"
            />
          </td>

          <!-- Password -->
          <td class="px-6 py-4">
            <input
              v-if="account.type !== 'LDAP'"
              v-model="account.password"
              type="password"
              class="w-full p-1 border rounded outline-none"
              placeholder="Enter password"
            />
            <span v-else class="text-gray-500">🔒 Hidden</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
