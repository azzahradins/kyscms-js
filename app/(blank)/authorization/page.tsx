'use client'
import React, { type ReactElement } from 'react'

import AuthProvider from '../../../hooks/authorization/navigate'
import Wrapper from './Wrapper'
import Link from 'next/link'

export default function Authorization (): ReactElement {
  return (
    <AuthProvider>
      <Wrapper />
      <Link href="/" className='dark:text-secondary'> Return to Homepage </Link>
    </AuthProvider>
  )
}
