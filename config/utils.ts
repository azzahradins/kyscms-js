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

export const formatHours = (value: string) => {
  return parseInt(value) < 10 ? 
    parseInt(`0${value}`) : 
    parseInt(value)
}

export const isValidHttpUrl = (string: string) => {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}