import { type CustomFlowbiteTheme, Label, TextInput } from 'flowbite-react'
import { type FC, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

interface IInputProps {
  name: string
  label: string
  type?: 'text' | 'number' | 'email' | 'password'
  size?: 'medium' | 'large'
  className?: string
  placeholder?: string
  maxLength?: number
  minLength?: number
  error?: { message: string, type: string, ref: string }
}

export const InputField: FC<IInputProps> =
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

      return <div key={name} className={className}>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <input
          id={name}
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder={placeholder ?? label}
          {...register(name)}
          {...props}/>
        <label className='text-sm text-danger'>{ errors[name]?.message }</label>
      </div>
    }
  )

export const InputFieldFb: FC<IInputProps> =
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

      return <div className="max-w-md mb-4">
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
          />
        </div>
        <TextInput
          id={name}
          helperText={<span className='text-sm text-danger'>{ errors[name]?.message }</span>}
          placeholder={placeholder}
          {...register(name)}
          {...props}
        />
      </div>
    }
  )

InputField.displayName = 'Input Field'
InputFieldFb.displayName = 'Input Field Flowbite Component'
