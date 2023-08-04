'use client'
import React, { type ReactElement } from 'react'

import AuthProvider from '../../../hooks/authorization/navigate'
import Wrapper from './Wrapper'

export default function Authorization (): ReactElement {
  return (
    <AuthProvider>
      <Wrapper />
    </AuthProvider>
  )
}
