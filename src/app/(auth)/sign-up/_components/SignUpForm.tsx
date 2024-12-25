'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormFields } from '@/lib/types/types'
import { fetchAddUserByEmailAndPassword } from '@/lib/api/services'
import { signUpSchema } from '@/lib/validations/schema'
import Input from '@/components/elements/Input'
import Button from '@/components/elements/Button'
import FormErrorMessage from '@/components/elements/FormErrorMessage'
import Heading from '@/components/elements/Heading'

export default function SignUpForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(signUpSchema)
  })

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    try {
      await fetchAddUserByEmailAndPassword({
        name: data.name,
        email: data.email,
        password: data.password
      })
    } catch (error) {
      console.error(error)
    } finally {
      router.push('/sign-in')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-6 font-[family-name:var(--font-helvetica-now-text)]'
    >
      <Heading level={1}>Join us.</Heading>
      <Input
        type='text'
        name='name'
        placeholder='Name*'
        register={register}
        error={errors.name}
      />

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

      <Input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password*'
        register={register}
        error={errors.confirmPassword}
      />

      {errors.root && (
        <FormErrorMessage>{errors.root.message}</FormErrorMessage>
      )}

      <Link href='/sign-in' className='text-gray-500 hover:underline'>
        Already have an account? Sign in
      </Link>

      <Button type='submit' disabled={isSubmitting} className='self-end'>
        {isSubmitting ? 'Signing up...' : 'Sign up'}
      </Button>
    </form>
  )
}
