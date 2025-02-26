import { ref, computed } from 'vue'
import { formatLabel } from '../../../utils/format-label'
import { useAccountStore } from '../../../stores/account'

interface Account {
  id: number
  label?: { text: string }[]
  type: 'LDAP' | 'Локальная'
  login: string
  password?: string | null
}

export function useAccount() {
  const account_store = useAccountStore()

  // Computed property for showing password column
  const showPasswordColumn = computed<boolean>(() =>
    account_store?.LIST.some((account: Account) => account.type !== 'LDAP'),
  )

  // Function to save updates with validation
  const saveUpdate = (account: Account, field: string, value: string): boolean => {
    if (field === 'login') {
      const isDuplicate = account_store.CHECK_LOGIN(account.id, value)
      if (isDuplicate) {
        alert('Этот логин уже используется!')
        return false
      }
    }

    const updatedValue = field === 'label' ? formatLabel(value) : value
    account_store.SET_ONE({ ...account, [field]: updatedValue })
    return true
  }

  return {
    account_store,
    showPasswordColumn,
    saveUpdate,
  }
}
