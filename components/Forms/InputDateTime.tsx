import { format, setHours, setMinutes } from "date-fns";
import { ReactElement, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import { Controller, useFormContext } from "react-hook-form";
import { useTableContext } from "flowbite-react/lib/esm/components/Table/TableContext";

registerLocale('id', id)

interface IInputDateTime {
  name: string
  value?:Date
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
  
  return (
    <div className="inputDateTime">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <ReactDatePicker
            className="inputField"
            selected={field.value}
            onChange={(date: Date) => field.onChange(date)}
            showTimeSelect={timeSelect}
            locale='id'
            dateFormat="d MMMM yyyy, HH:mm"
          />
        )}
      />
    </div>
  )
}