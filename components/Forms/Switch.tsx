'use client'

import { Label, ToggleSwitch } from 'flowbite-react'
import React, { forwardRef, type FC } from 'react'
import { useFormContext, Controller } from 'react-hook-form'

interface ISwitch {
  name: string
  label: string
  placeholder?: string
  className?: string
}

export const Switch: FC<ISwitch> = forwardRef<HTMLInputElement, ISwitch>(
  ({
    name,
    label,
    placeholder,
    className
  }) => {
    const { control, formState: { errors } } = useFormContext()

    const form = <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => <ToggleSwitch
        label=''
        checked={value}
        onChange={onChange}
      />}/>

    return (
      <div className="max-w-md mb-4" id="select">
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}/>
        </div>
        <div className='flex flex-row text-sm font-light'>
          <span className='pr-3'>Content warning that may contain sensitive imageries such as pornographic, offensive, or other content unsuitable for viewing at work or in public places.</span>
          <div className='self-center justify-center'>
            {form}
          </div>
        </div>
        <span className='text-sm text-danger'>{ errors[name]?.message }</span>
      </div>
    )
  }
)

Switch.displayName = 'Toggle Switch'
