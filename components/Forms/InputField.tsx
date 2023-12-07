import { Label, TextInput } from 'flowbite-react'
import { type FC, forwardRef } from 'react'
import { get, useFormContext } from 'react-hook-form'

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
  hidden?: boolean
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
        hidden,
        ...props
      }, ref
    ) => {
      const { register, formState } = useFormContext()

      const error = get(formState.errors)
      console.log(error);

      return <div key={name} className={className} hidden={hidden}>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <input
          id={name}
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          className="inputField"
          placeholder={placeholder ?? label}
          {...register(name)}
          {...props} />
        <label className='text-sm text-danger'>{(Boolean(error)) && error.message}</label>
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
        className = 'w-full mb-4',
        placeholder,
        maxLength = 120,
        minLength = 0,
        ...props
      }, ref
    ) => {
      const { register, formState } = useFormContext()

      const error = get(formState.errors, name)

      return <div className={`${className}`}>
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
          />
        </div>
        <TextInput
          id={name}
          helperText={<span className='text-sm text-danger'>{(Boolean(error)) && error.message}</span>}
          placeholder={placeholder}
          {...register(name)}
          {...props}
        />
      </div>
    }
  )

InputField.displayName = 'Input Field'
InputFieldFb.displayName = 'Input Field Flowbite Component'
