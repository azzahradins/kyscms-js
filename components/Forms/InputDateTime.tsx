import { type ReactElement, useState } from 'react'
import { registerLocale } from 'react-datepicker'
import id from 'date-fns/locale/id'
import { Controller, useFormContext } from 'react-hook-form'
import Calendar from 'react-calendar'
import { formatDateToReadable } from '@/config/utils'
import useOutsideClick from '@/hooks/OutsideClick'

registerLocale('id', id)

interface IInputDateTime {
  name: string
  placeholder?: string
  label?: string
  value?: Date
  minDate?: Date
  maxDate?: Date
  timeSelect?: boolean
  className?: string
}

export const InputDateTime = ({
  name,
  label,
  placeholder,
  value,
  minDate,
  maxDate,
  timeSelect = true,
  className
}: IInputDateTime): ReactElement => {
  const { control, register, setValue, formState: { errors } } = useFormContext()
  const [calendar, toggleCalendar] = useState(false)

  const handleClickOutside = (): void => {
    toggleCalendar(false)
  }

  const calendarRef = useOutsideClick(handleClickOutside)

  return (
    <div className='flex flex-row gap-2'>
      <div className="inputDateTime" ref={calendarRef}>
        <label htmlFor={name} className="text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        <input
          readOnly
          type={'text'}
          className="inputField mt-2"
          placeholder={placeholder ?? label}
          {...register(`${name}Preview`)}
          onClick={() => { toggleCalendar(!calendar) }}
        />
        <Controller
          control={control}
          name={`${name}Date`}
          render={({ field }) => (
            <Calendar
              calendarType="gregory"
              className={`inputField absolute z-99 ${calendar ? 'visible' : 'invisible'}`}
              minDate={new Date()}
              onChange={(date: any) => {
                field.onChange(date)
                setValue(`${name}Preview`, formatDateToReadable(date))
                toggleCalendar(!calendar)
              }}
            />
          )}
        />
      </div>
      <div>
        <label htmlFor={name} className="invisible text-sm font-medium text-gray-900 dark:text-gray-300">a</label>
        <input
          id={`${name}Time`}
          type={'time'}
          className="inputField mt-2"
          placeholder={placeholder ?? label}
          {...register(`${name}Time`)}
          onClick={() => {}}
        />
      </div>
    </div>
  )
}
