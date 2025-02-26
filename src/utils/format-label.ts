export const formatLabel = (value: string): { text: string }[] => {
  return value
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '') // Remove empty entries
    .map((item) => ({ text: item }))
}

export const labelToString = (labels: { text: string }[]): string => {
  return labels.map((label) => label.text).join('; ')
}
