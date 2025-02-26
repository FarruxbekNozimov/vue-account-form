import { computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { formatLabel, labelToString } from '../utils/format-label'

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
  // Load from localStorage or use default
  const storedData = localStorage.getItem('accounts')
  const state = reactive<State>({
    list: storedData
      ? JSON.parse(storedData)
      : [
          {
            id: 1,
            label: [{ text: 'XXX' }, { text: 'YYY' }],
            type: 'LDAP',
            login: 'admin',
            password: 'admin',
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
      type: 'Локальная',
      login: '',
      password: null,
    }
    state.list.push(newAccount)
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

  // Check login is duplicate or not
  const CHECK_LOGIN = (id: number, login: string): boolean => {
    const isDuplicate = state.list.some(
      (account) => account.login && account.id !== id && account.login === login,
    )
    return isDuplicate
  }

  // Save to localStorage whenever state.list changes
  watch(
    () => state.list,
    (newList) => {
      localStorage.setItem('accounts', JSON.stringify(newList))
    },
    { deep: true },
  )

  return {
    LIST: computed(() => state.list),
    SET_ONE,
    ADD_ACCOUNT,
    DELETE,
    CHECK_LOGIN,
  }
})
