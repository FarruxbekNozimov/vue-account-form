import { computed } from 'vue';
import { formatLabel } from '../../../utils/format-label';
import { useAccountStore } from '../../../stores/account';
export function useAccount() {
    const account_store = useAccountStore();
    // Computed property for showing password column
    const showPasswordColumn = computed(() => account_store?.LIST.some((account) => account.type !== 'LDAP'));
    // Function to save updates with validation
    const saveUpdate = (account, field, value) => {
        if (field === 'login') {
            const isDuplicate = account_store.CHECK_LOGIN(account.id, value);
            if (isDuplicate) {
                alert('Этот логин уже используется!');
                return false;
            }
        }
        const updatedValue = field === 'label' ? formatLabel(value) : value;
        account_store.SET_ONE({ ...account, [field]: updatedValue });
        return true;
    };
    return {
        account_store,
        showPasswordColumn,
        saveUpdate,
    };
}
