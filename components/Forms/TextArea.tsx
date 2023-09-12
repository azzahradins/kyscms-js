'use client'

import { Label, Textarea } from 'flowbite-react'
import { forwardRef, type FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface ITextArea {
  name: string
  label: string
  placeholder?: string
  className?: string
}

export const TextArea: FC<ITextArea> = forwardRef<HTMLInputElement, ITextArea>(
  ({
    name,
    label,
    placeholder,
    className
  }, ref) => {
    const { register, formState: { errors } } = useFormContext()

    return (
      <div className="w-full mb-4" id="select">
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
          />
        </div>
        <Textarea
          id={name}
          helperText={<span className='text-sm text-danger'>{ errors[name]?.message }</span>}
          placeholder={placeholder}
          rows={4}
          {...register(name)}
        />
      </div>
    )
  }
)

TextArea.displayName = 'Basic Text Area'
