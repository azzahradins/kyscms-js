import { format, setHours, setMinutes } from 'date-fns'
import { type ReactElement, useState } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import id from 'date-fns/locale/id'
import { Controller, useFormContext } from 'react-hook-form'
import { useTableContext } from 'flowbite-react/lib/esm/components/Table/TableContext'

registerLocale('id', id)

interface IInputDateTime {
  name: string
  value?: Date
  minDate?: Date
  maxDate?: Date
  timeSelect?: boolean
  className?: string
}

export const InputDateTime = ({
  name,
  value,
  minDate,
  maxDate,
  timeSelect = true,
  className
}: IInputDateTime): ReactElement => {
  const { control, register, formState: { errors } } = useFormContext()

  const handleMinTime = (time: any): string => {
    return time > new Date() ? '' : 'text-red-500'
  }

  return (
    <div className="inputDateTime">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <ReactDatePicker
            className="inputField"
            selected={field.value}
            minDate={new Date()}
            onChange={(date: Date) => { field.onChange(date) }}
            showTimeSelect={timeSelect}
            locale='id'
            timeClassName={handleMinTime}
            dateFormat="d MMMM yyyy, HH:mm"
          />
        )}
      />
    </div>
  )
}
