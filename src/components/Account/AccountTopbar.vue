<script setup>
import { useAccountStore } from '@/stores/account.ts'
import AddButton from '@/components/Widgets/AddButton.vue'

const account_store = useAccountStore()
</script>

<template>
  <div class="flex items-center gap-10 bg-gray-100 p-2 px-6 rounded-xl shadow-xl">
    <h3 class="text-3xl font-bold">Учетные записи</h3>
    <AddButton @click="account_store.ADD_ACCOUNT()" />
  </div>
</template>
