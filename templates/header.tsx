'use client'

import DarkModeSwitcher from '@/components/Utilities/DarkModeSwitcher'
import Link from 'next/link'

export default function Header (): JSX.Element {
  return (
    <header>
      <nav className="spacing mb-2.5 border-b-white border-b-5 ">
          <div className="container flex flex-wrap justify-between items-center text-prplprimary dark:text-prplDPrimary">
              <span className="self-center text-xl font-semibold whitespace-nowrap">SCMS</span>
              <div className="flex items-center lg:order-2 gap-3">
                  <DarkModeSwitcher />
                  <Link href="/authorization" className="text-prplprimary dark:bg-prplDAccent hover:bg-prplaccent hover:text-prplsecondary ring-2 ring-prplDsecondary font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-1.5 mr-2 dark:text-prplDPrimary dark:hover:bg-prplDhover focus:outline-none">Login</Link>
              </div>
          </div>
      </nav>
    </header>
  )
}
