import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AuthNavigateContext } from '../../../hooks/authorization/navigate'
import { Form, InputField, Button } from '@/components/Forms'

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Invalid email value'
  }),
  password: z.string().min(8, { message: 'Password atleast 8 character' })
})

type LoginForm = z.infer<typeof validationSchema>

export default function Login (): JSX.Element {
  const { setPage } = React.useContext(AuthNavigateContext)

  const formMethod = useForm<LoginForm>({
    resolver: zodResolver(validationSchema)
  })

  const submitLogin = (data: any): void => {
    console.log(data)
  }

  return (
    <div className='flex flex-col gap-4 spacing'>
      <div>
        <h2>
          Login
        </h2>
        <span>You don&apos;t have account?
          <button
            onClick={() => { setPage('register') }}
            className='mx-1 text-purple-800 dark:text-purple-300'>
            Register
          </button>
        </span>
      </div>
      <Form
        methods={formMethod}
        onSubmit={submitLogin}>
        <div className='flex flex-col gap-3'>
          <InputField
            name='email'
            label='Email Address'/>
          <InputField
            name='password'
            type='password'
            label='Password'/>
        </div>
        <div className='mt-3'>
          <Button type='submit' text='Login'/>
        </div>
      </Form>
    </div>
  )
}
