'use client'

import { type CustomFlowbiteTheme, Label, TextInput } from 'flowbite-react'
import { type FC, forwardRef, type FunctionComponent, type SVGProps } from 'react'
import { useFormContext } from 'react-hook-form'

interface IInputProps {
  name: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  label?: string
  type?: 'text' | 'number' | 'email' | 'password'
  size?: 'medium' | 'large'
  className?: string
  placeholder?: string
  maxLength?: number
  minLength?: number
  error?: { message: string, type: string, ref: string }
}

const customForm: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      colors: {
        gray: 'bg-transparent border-gray-300 text-gray-900 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
      }
    }
  }
}

export const InputIcon: FC<IInputProps> =
  forwardRef<HTMLInputElement, IInputProps>(
    (
      {
        name,
        icon,
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
      <div className="w-full lg:max-w-md">
        {label !== null && <div className="block">
          <Label
            htmlFor="email4"
            value={label}
          />
        </div>}
        <TextInput
          theme={customForm}
          id={name}
          required
          placeholder={placeholder}
          className={className}
          rightIcon={icon}
          autoComplete='false'
          autoCorrect='false'
          enterKeyHint='search'
          {...register(name)}
          {...props}
        />
        <label className='text-sm text-danger'>{ errors[name]?.message }</label>
      </div>
      )
    }
  )

InputIcon.displayName = 'Input Icon'
