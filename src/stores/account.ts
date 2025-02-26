import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { formatLabel, labelToString } from '@/utils/format-label'

// Define types for account
interface Account {
  id: number
  label?: { text: string }[]
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
    list: [
      {
        id: 1,
        label: [{ text: 'Admin' }, { text: 'HR' }, { text: 'HR' }],
        type: 'Локальная',
        login: 'admin',
        password: 'password',
      },
    ],
  })

  // Helper function to enforce character limits and format label
  const enforceLimits = (account: Account) => {
    return {
      ...account,
      label: account.label ? formatLabel(labelToString(account.label).substring(0, 50)) : [],
      login: account.login.substring(0, 100),
      password: account.password ? account.password.substring(0, 100) : null,
    }
  }

  // Add account with validation
  const ADD_ACCOUNT = (): void => {
    const newAccount: Account = {
      id: Date.now(),
      label: [],
      type: 'Локальная', // Default type, change if needed
      login: '',
      password: null,
    }
    state.list = [...state.list, newAccount]
  }
  // Update one account with validation
  const SET_ONE = (updatedAccount: Account): void => {
    const index = state.list.findIndex((account) => account.id === updatedAccount.id)
    if (index !== -1) {
      state.list[index] = enforceLimits(updatedAccount)
    }
  }

  // Delete an account by ID
  const DELETE = (id: number): void => {
    state.list = state.list.filter((account) => account.id !== id)
  }

  return {
    LIST: computed(() => state.list),
    SET_ONE,
    ADD_ACCOUNT,
    DELETE,
  }
})
