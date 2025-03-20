'use client'

import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { handleCredentialsSignin, handleGoogleSignIn } from '@/app/actions/auth'
import { SignInFormFields } from '@/lib/types/types'
import { signInSchema } from '@/lib/validations/schema'
import Input from '@/components/elements/Input'
import Button from '@/components/elements/Button'
import FormErrorMessage from '@/components/elements/FormErrorMessage'
import Icon from '@/components/elements/Icon'
import Heading from '@/components/elements/Heading'

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<SignInFormFields>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit: SubmitHandler<SignInFormFields> = async ({
    email,
    password
  }) => {
    try {
      const response = await handleCredentialsSignin({ email, password })

      if (response?.error) {
        setError('root', { message: response.error.message })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignInWithGoogle = async () => {
    await handleGoogleSignIn()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-6 font-[family-name:var(--font-helvetica-now-text)]'
    >
      <Heading level={1}>Sign in to nike.</Heading>
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

      <Link
        href='/sign-up'
        className='text-sm text-gray-500 hover:underline lg:text-base'
      >
        Don&rsquo;t have an account? Sign up
      </Link>

      <Button type='submit' disabled={isSubmitting} className='self-end'>
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>

      <div className='flex flex-col gap-3'>
        <p className='text-sm'>Or continue with</p>
        <Button
          type='button'
          onClick={() => handleSignInWithGoogle()}
          className='flex w-full items-center justify-center gap-2 bg-red-700'
        >
          <Icon icon={faGoogle} className='h-4 w-4' />
          Sign in with google
        </Button>
      </div>
    </form>
  )
}
