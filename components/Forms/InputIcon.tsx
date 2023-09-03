'use client'

import { Label, TextInput } from 'flowbite-react'
import { type FC, forwardRef } from 'react'
import { HiMail } from 'react-icons/hi'
import { useFormContext } from 'react-hook-form'

interface IInputProps {
  name: string
  label?: string
  type?: 'text' | 'number' | 'email' | 'password'
  size?: 'medium' | 'large'
  className?: string
  placeholder?: string
  maxLength?: number
  minLength?: number
  error?: { message: string, type: string, ref: string }
}

export const InputIcon: FC<IInputProps> =
  forwardRef<HTMLInputElement, IInputProps>(
    (
      {
        name,
        label,
        type = 'text',
        size = 'medium',
        className = '',
        placeholder,
        maxLength = 120,
        minLength = 0,
        ...props
      }, ref
    ) => {
      const { register, formState: { errors } } = useFormContext()

      return (
      <div className="max-w-md">
        {label !== null && <div className="block">
          <Label
            htmlFor="email4"
            value={label}
          />
        </div>}
        <TextInput
          id={name}
          required
          placeholder={placeholder}
          className={className}
          rightIcon={HiMail}
          type="email"
          {...register(name)}
          {...props}
        />
        <label className='text-sm text-danger'>{ errors[name]?.message }</label>
      </div>
      )
    }
  )

InputIcon.displayName = 'Input Icon'
