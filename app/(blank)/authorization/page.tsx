'use client'
import React, { type ReactElement } from 'react'

import AuthProvider from '../../../context/authorization/navigate'
import Wrapper from './Wrapper'

export default function Authorization (): ReactElement {
  return (
    <AuthProvider>
      <Wrapper />
    </AuthProvider>
  )
}
