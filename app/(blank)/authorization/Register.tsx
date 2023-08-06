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
  fullname: z.string().min(1, { message: 'Fullname is required' }),
  password: z.string().min(8, { message: 'Password atleast 8 character' }),
  cpassword: z.string().min(1, { message: 'Confirm password is required' })
}).refine((data) => data.password === data.cpassword, {
  path: ['cpassword'],
  message: 'Password does not match'
})

type RegisterForm = z.infer<typeof validationSchema>

export default function Register (): JSX.Element {
  const { setPage } = React.useContext(AuthNavigateContext)

  const formMethod = useForm<RegisterForm>({
    resolver: zodResolver(validationSchema)
  })

  const submitRegister = (data: any): void => {
    if (data !== null) {
      setPage('verification', data)
    }
  }

  return (
    <div className='flex flex-col gap-4 spacing'>
      <div>
        <h2>
          Register
        </h2>
        <span>
          Do you have an account?
          <button
            onClick={() => { setPage('login') }}
            className='mx-1 text-purple-800 dark:text-purple-300'>
            Login
          </button>
        </span>
      </div>
      <Form
        methods={formMethod}
        onSubmit={submitRegister}>
        <div className='flex flex-col gap-3'>
          <InputField
            name='email'
            type='text'
            label='Email Address'/>
          <InputField
            name='fullname'
            label='Fullname'/>
          <InputField
            name='password'
            type='password'
            label='Password'/>
          <InputField
            name='cpassword'
            type='password'
            label='Confirm Password'/>
        </div>
        <div className='mt-3'>
          <Button type='submit' text='Register'/>
        </div>
      </Form>
    </div>
  )
}
