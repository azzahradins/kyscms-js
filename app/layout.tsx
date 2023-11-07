import '../assets/styles/globals.css'
import '../assets/styles/satoshi.css'
import Loading from './loading'

import { Providers } from './providers'

import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-calendar/dist/Calendar.css'

config.autoAddCss = false

export const metadata = {
  title: 'Content Management System',
  description: 'Structuring NextJS'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Loading/>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
