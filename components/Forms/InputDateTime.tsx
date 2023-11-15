import { type ReactElement, useState, useRef, useEffect } from 'react'
import { registerLocale } from 'react-datepicker'
import id from 'date-fns/locale/id'
import { Controller, useFormContext } from 'react-hook-form'
import Calendar from 'react-calendar'
import { formatDateToReadable } from '@/config/utils'
import useOutsideClick from '@/hooks/OutsideClick'
import { Checkbox, Label } from 'flowbite-react'
import { InputField } from './InputField'

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
  const { setValue } = useFormContext()
  const [calendar, toggleCalendar] = useState(false)

  const [inputDate, setInputDate] = useState<Date>()
  const [inputTime, setInputTime] = useState<string>()
  const [isCurrent, setCurrent] = useState<boolean>(false)

  useEffect(() => {
    if (inputDate && inputTime) {
      const date = inputDate
      date.setHours(parseInt(inputTime.split(':')[0]))
      // setValue(name, 'agrivageres')
    }
  }, [inputDate, inputTime])

  useEffect(() => {
    const now = new Date()
    if (isCurrent) {
      setInputDate(now)
      setInputTime(`${now.getHours()}:${now.getMinutes()}`)
      setValue(name, now)
    }
  }, [isCurrent])

  const handleClickOutside = (): void => {
    toggleCalendar(false)
  }

  const calendarRef = useOutsideClick(handleClickOutside)

  return (
    <div>
      <div className='flex flex-row gap-2'>
        <InputField name={`${name}`} label='' hidden />
        <div className="inputDateTime" ref={calendarRef}>
          <label htmlFor={name} className="text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
          <input
            readOnly
            type={'text'}
            className="inputField mt-2"
            placeholder={placeholder ?? label}
            disabled={isCurrent}
            value={formatDateToReadable(inputDate)}
            onClick={() => { toggleCalendar(!calendar) }}
          />
          <Calendar
            calendarType="gregory"
            className={`inputField absolute z-99 ${calendar ? 'visible' : 'invisible'}`}
            minDate={new Date()}
            onChange={(date: any) => {
              setInputDate(date)
              toggleCalendar(!calendar)
            }}
          />
        </div>
        <div>
          <label htmlFor={name} className="invisible text-sm font-medium text-gray-900 dark:text-gray-300">a</label>
          <input
            type={'time'}
            className="inputField mt-2"
            placeholder={placeholder ?? label}
            disabled={isCurrent}
            value={inputTime}
            onChange={(e) => {
              setInputTime(e.target.value)
            }} />
        </div>
      </div>
      <div className='mt-2'>
        <div className="flex items-center gap-2">
          <Checkbox id="promotion" value={isCurrent.toString()} onClick={() => setCurrent(!isCurrent)} />
          <Label htmlFor="promotion">Use current time</Label>
        </div>
      </div>
    </div>
  )
}
