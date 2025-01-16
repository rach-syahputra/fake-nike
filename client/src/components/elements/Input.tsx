/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, Path, UseFormRegister } from 'react-hook-form'
import FormErrorMessage from './FormErrorMessage'

type InputProps<T extends Record<string, any>> = {
  type: string
  placeholder: string
  name: Path<T>
  register: UseFormRegister<T>
  error: FieldError | undefined
}

export default function Input<T extends Record<string, any>>({
  name,
  type,
  placeholder,
  register,
  error
}: InputProps<T>) {
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
