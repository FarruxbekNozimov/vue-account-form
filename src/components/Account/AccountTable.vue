<script setup>
import { useAccount } from '@/components/Account/composables/useAccount.ts'
import AccountRow from '@/components/Account/AccountRow.vue'

const { account_store, showPasswordColumn, saveUpdate } = useAccount()

const isDuplicateLogin = (account) => {
  return account_store.CHECK_LOGIN(account.id, account.login)
}
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
            {{ showPasswordColumn || !account_store?.LIST?.length ? 'Пароль' : '' }}
          </th>
          <th class="px-6 py-3 w-[10%]"></th>
        </tr>
      </thead>
      <tbody>
        <AccountRow
          v-for="account in account_store?.LIST"
          :key="account.id"
          :account="account"
          :isDuplicateLogin="isDuplicateLogin"
          @update-label="(account, value) => (account.label = value)"
          @save-update="saveUpdate"
          @update-type="
            (account) =>
              account_store.SET_ONE({
                ...account,
                password: account.type === 'LDAP' ? null : account.password,
              })
          "
          @update-login="(account, value) => (account.login = value)"
          @delete-account="(id) => account_store.DELETE(id)"
        />
      </tbody>
    </table>
  </div>
</template>
