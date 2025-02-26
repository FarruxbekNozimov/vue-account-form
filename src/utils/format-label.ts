export const formatLabel = (value: string): { text: string }[] => {
  return value
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => ({ text: item }))
}

export const labelToString = (labels: { text: string }[] | string): string => {
  if (typeof labels === 'string') {
    return labels
  }

  return labels.map((label) => label.text).join('; ')
}
