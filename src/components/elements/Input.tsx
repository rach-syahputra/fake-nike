import { FieldError, UseFormRegister } from 'react-hook-form'
import { FieldNames, FormFields } from '@/lib/types/types'
import FormErrorMessage from './FormErrorMessage'

interface InputProps {
  type: string
  placeholder: string
  name: FieldNames
  register: UseFormRegister<FormFields>
  error: FieldError | undefined
}

export default function Input({
  name,
  type,
  placeholder,
  register,
  error
}: InputProps) {
  return (
    <div className='flex w-full flex-col gap-2 font-[family-name:var(--font-helvetica-now-text)]'>
      <label htmlFor={name} className='sr-only'>
        Email
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='font- rounded-md border border-gray-500 p-4 text-sm focus-within:border-gray-900 focus-within:outline-none'
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </div>
  )
}
