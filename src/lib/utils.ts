import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(string: string) {
  const trimmedString = string.trim()
  if (!trimmedString) return ''
  return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1)
}

export function formatToRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
    .format(amount)
    .replace('Rp', 'Rp ')
    .replaceAll('.', ',')
}
