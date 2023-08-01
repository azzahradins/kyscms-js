'use client'
import { ThemeProvider } from 'next-themes'

export function Providers ({ children }: { children: React.ReactNode }): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>
}
