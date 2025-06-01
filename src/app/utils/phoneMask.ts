export const phoneMask = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
    .replace(/(-\d{4})\d+$/, "$1");
}