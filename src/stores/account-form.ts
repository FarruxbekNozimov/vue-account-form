import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

// Define types for account
interface Account {
  id: number
  label?: string
  type: 'LDAP' | 'Локальная'
  login: string
  password?: string | null
}

// Define state type
interface State {
  list: Account[]
}

export const useAccountStore = defineStore('account', () => {
  const state = reactive<State>({
    list: [],
  })

  // Add account
  const ADD_ACCOUNT = (data: Account): void => {
    const newAccount: Account = { ...data, id: Date.now() }
    state.list = [...state.list, newAccount]
    console.log(state.list)
  }

  // Delete an account by ID
  const DELETE = (id: number): void => {
    state.list = state.list.filter((account) => account.id !== id)
  }

  // Set/update one account
  const SET_ONE = (updatedAccount: Account): void => {
    const index = state.list.findIndex((account) => account.id === updatedAccount.id)
    if (index !== -1) {
      state.list[index] = updatedAccount
    }
  }

  return {
    LIST: computed(() => state.list),
    SET_ONE,
    ADD_ACCOUNT,
    DELETE,
  }
})
