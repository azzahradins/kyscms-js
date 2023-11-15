import React, { type ReactNode } from 'react'
import { format } from 'date-fns'

export const hasInputChildren = (element: ReactNode): boolean => {
  if (element === false || !React.isValidElement(element)) {
    return false
  }

  const { children } = element.props

  if (Array.isArray(children)) {
    return children.some((child) => hasInputChildren(child))
  }

  // If "children" is a single element, check if it's non-null/undefined
  return element !== null
}

export const formatDateToIso = (value: Date): string => {
  return new Date(value).toISOString()
}

export const formatDateToReadable = (value: Date | undefined): string => {
  return (typeof value === 'object') ? format(value, 'dd MMMM yyyy') : ''
}
