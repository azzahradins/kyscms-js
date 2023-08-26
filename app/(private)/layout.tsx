'use client'

import Navbar from '@/components/Page/Navbar'
import Sidebar from '@/components/Page/Sidebar'
import { SidebarProvider } from '@/hooks/SidebarContext'

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SidebarProvider>
      <main className="flex flex-row">
        <div className='min-h-screen'>
          <Sidebar />
        </div>
        <div className='flex-auto'>
          <Navbar/>
          <div className='m-2 my-2.5'>
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}
