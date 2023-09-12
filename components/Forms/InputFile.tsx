'use client'

import { FileInput, Label } from 'flowbite-react'
import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

interface IFileInput {
  name: string
  label: string
  placeholder?: string
  className?: string
  error?: { message: string, type: string, ref: string }
}

export const InputFile: React.FC<IFileInput> = forwardRef<HTMLInputElement, IFileInput>(
  (
    {
      name,
      label,
      placeholder,
      className
    }, ref
  ) => {
    const { register, formState: { errors } } = useFormContext()

    return (
      <div
        className="w-full mb-4"
        id={name}>
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
          />
        </div>
        <FileInput
          helperText={placeholder}
          id={name}
          {...register(name)}
        />
      </div>
    )
  }
)

InputFile.displayName = 'Input File'
