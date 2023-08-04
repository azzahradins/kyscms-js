import '../assets/styles/globals.css'
import '../assets/styles/satoshi.css'

import { Providers } from './providers'

export const metadata = {
  title: 'Structuring NextJS',
  description: 'Structuring NextJS'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
