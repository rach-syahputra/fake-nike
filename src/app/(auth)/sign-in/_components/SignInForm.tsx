'use client'

import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleCredentialsSignin } from '@/app/actions/auth'
import { SignInFormFields } from '@/lib/types/types'
import { signInSchema } from '@/lib/validations/schema'
import Input from '@/components/elements/Input'
import Button from '@/components/elements/Button'
import FormErrorMessage from '@/components/elements/FormErrorMessage'

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<SignInFormFields>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      const res = await handleCredentialsSignin(data)

      if (res?.error) {
        setError('root', { message: res.error.message })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-6 font-[family-name:var(--font-helvetica-now-text)]'
    >
      <Input
        type='email'
        name='email'
        placeholder='Email*'
        register={register}
        error={errors.email}
      />

      <Input
        type='password'
        name='password'
        placeholder='Password*'
        register={register}
        error={errors.password}
      />

      {errors.root && (
        <FormErrorMessage>{errors.root.message}</FormErrorMessage>
      )}

      <Link href='/sign-up' className='text-gray-500 hover:underline'>
        Don&rsquo;t have an account? Sign up
      </Link>

      <Button type='submit' disabled={isSubmitting} className='self-end'>
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  )
}
