'use client'

import { Label, Select } from 'flowbite-react'
import { forwardRef, type FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface ISelectProps {
  name: string
  label: string
  options: Array<{ value: string, label: string }>
  className?: string
  placeholder?: string
  error?: { message: string, type: string, ref: string }
}

export const SelectInput: FC<ISelectProps> = forwardRef<HTMLInputElement, ISelectProps>(
  ({
    name,
    label,
    options,
    className,
    placeholder,
    error
  }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
      <div className="max-w-md mb-4" id="select">
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
          />
        </div>
        <Select
          id={name}
          helperText={<span className='text-sm text-danger'>{ errors[name]?.message }</span>}
          {...register(name)}>
          {options.map(option =>
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )}
        </Select>
      </div>
    )
  }
)

SelectInput.displayName = 'Select Input'
