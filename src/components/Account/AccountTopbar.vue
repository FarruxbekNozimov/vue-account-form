<script setup>
import { useAccountStore } from '@/stores/account'
import AddButton from '../Widgets/AddButton.vue'

const accountStore = useAccountStore()
</script>

<template>
  <div class="flex items-center gap-10 bg-gray-100 p-2 px-5 rounded-xl shadow-xl">
    <h3 class="text-3xl font-bold">Учетные записи</h3>
    <AddButton @click="accountStore.ADD_ACCOUNT()" />
  </div>
</template>
