export const validateField = (field: 'label' | 'login' | 'password', value: string): boolean => {
  const limits: Record<'label' | 'login' | 'password', number> = {
    label: 50,
    login: 100,
    password: 100,
  }

  return value.length > 0 && value.length <= limits[field]
}
