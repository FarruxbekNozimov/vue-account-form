<script setup>
import { useAccountStore } from '@/stores/account-form'
import { storeToRefs } from 'pinia'

const accountStore = useAccountStore()
const { LIST } = storeToRefs(accountStore) // Reactive reference to list
</script>

<template>
  <div class="border rounded-xl shadow-xl relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Метки</th>
          <th scope="col" class="px-6 py-3">Типа записи</th>
          <th scope="col" class="px-6 py-3">Логин</th>
          <th scope="col" class="px-6 py-3">Пароль</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in LIST" :key="account.id" class="bg-white border-b border-gray-200">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ account.label || '—' }}
          </td>
          <td class="px-6 py-4">{{ account.type }}</td>
          <td class="px-6 py-4">{{ account.login }}</td>
          <td class="px-6 py-4">
            <span v-if="account.type === 'LDAP'">🔒 Hidden</span>
            <span v-else>{{ account.password || '—' }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
