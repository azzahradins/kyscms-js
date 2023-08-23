'use client'

import Sidebar from "@/components/Page/Sidebar"

export default function Dashboard (): JSX.Element {
  return (
    <main className="flex flex-row">
    <div className='min-h-screen'>
      <Sidebar />
    </div>
    <div className='flex-auto'>
      Wak wak wak
    </div>
    </main>
  )
}
