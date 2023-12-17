'use client'

import { Label } from 'flowbite-react'
import { forwardRef, type FC } from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import Select, { components, type ClearIndicatorProps, type DropdownIndicatorProps, type MultiValueRemoveProps } from 'react-select'
import classNames from 'classnames'

interface ISelectProps {
  name: string
  label?: string
  options: Array<{ value: string, label: string }>
  isMulti?: boolean
  className?: string
  placeholder?: string
  error?: { message: string, type: string, ref: string }
}

const DropdownIndicator = (props: DropdownIndicatorProps): React.ReactElement => {
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown />
    </components.DropdownIndicator>
  )
}

const ClearIndicator = (props: ClearIndicatorProps): React.ReactElement => {
  return (
    <components.ClearIndicator {...props}>
      <FaTimes />
    </components.ClearIndicator>
  )
}

const MultiValueRemove = (props: MultiValueRemoveProps): React.ReactElement => {
  return (
    <components.MultiValueRemove {...props}>
      <FaTimes />
    </components.MultiValueRemove>
  )
}

const defaultGray = 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500'

const controlStyles = {
  base: `border rounded-lg hover:cursor-pointer ${defaultGray}`,
  focus: 'border-primary-600 ring-1 ring-primary-500',
  nonFocus: 'border-gray-300 hover:border-gray-400'
}
const placeholderStyles = 'text-gray-500 pl-2 py-0.5'
const selectInputStyles = 'pl-1 py-0.5'
const valueContainerStyles = 'p-1 gap-1'
const singleValueStyles = 'leading-7 ml-2'
const multiValueStyles = `bg-gray-100 border rounded items-center py-0.5 pl-2 pr-1 gap-1.5 ${defaultGray}`
const multiValueLabelStyles = 'leading-6 py-0.5'
const multiValueRemoveStyles = 'text-gray-500 hover:text-red-500 rounded-sm'
const indicatorsContainerStyles = 'p-1 gap-1'
const clearIndicatorStyles = 'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800'
const indicatorSeparatorStyles = 'bg-gray-300 mr-1.5'
const dropdownIndicatorStyles =
  'p-0 hover:bg-gray-100 text-gray-500 rounded-md'
const menuStyles = 'p-1 mt-1 rounded-lg border border-cyan-500 ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500'
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm'
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2',
  focus: 'bg-gray-600 active:bg-gray-700',
  selected: 'after:ml-2 text-gray-500 dark:text-white bg-primary'
}
const noOptionsMessageStyles = `p-2 border border-dashed border-gray-200 rounded-sm ${defaultGray}`

export const SelectInput: FC<ISelectProps> = forwardRef<HTMLInputElement, ISelectProps>(
  ({
    name,
    label='',
    options,
    isMulti = false,
    className,
    placeholder,
  }, ref) => {
    const { control, formState } = useFormContext()

    const error = get(formState.errors, name)

    return (
      <div className="w-full mb-4" id="select">
        <div className="mb-2 block">
          <Label
            htmlFor={name}
            value={label}
          />
        </div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              aria-errormessage='errors'
              onChange={onChange}
              options={options}
              isMulti={isMulti}
              closeMenuOnSelect={!isMulti}
              hideSelectedOptions={false}
              unstyled
              maxMenuHeight={150}
              styles={{
                input: (base) => ({
                  ...base,
                  'input:focus': {
                    boxShadow: 'none'
                  }
                }),
                // On mobile, the label will truncate automatically, so we want to
                // override that behaviour.
                multiValueLabel: (base) => ({
                  ...base,
                  whiteSpace: 'normal',
                  overflow: 'visible'
                }),
                control: (base) => ({
                  ...base,
                  transition: 'none'
                })
              }}
              components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
              classNames={{
                control: ({ isFocused }) =>
                  classNames(
                    isFocused ? controlStyles.focus : controlStyles.nonFocus,
                    controlStyles.base
                  ),
                placeholder: () => placeholderStyles,
                input: () => selectInputStyles,
                valueContainer: () => valueContainerStyles,
                singleValue: () => singleValueStyles,
                multiValue: () => multiValueStyles,
                multiValueLabel: () => multiValueLabelStyles,
                multiValueRemove: () => multiValueRemoveStyles,
                indicatorsContainer: () => indicatorsContainerStyles,
                clearIndicator: () => clearIndicatorStyles,
                indicatorSeparator: () => indicatorSeparatorStyles,
                dropdownIndicator: () => dropdownIndicatorStyles,
                menu: () => menuStyles,
                groupHeading: () => groupHeadingStyles,
                option: ({ isFocused, isSelected }) =>
                  classNames(
                    isFocused && optionStyles.focus,
                    isSelected && optionStyles.selected,
                    optionStyles.base
                  ),
                noOptionsMessage: () => noOptionsMessageStyles
              }} />
          )} />
        <label className='text-sm text-danger'>{(Boolean(error)) && error.message}</label>
      </div>
    )
  }
)

SelectInput.displayName = 'Select Input'
