'use client'

import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { CardDetail } from './components/card'
import { Button } from 'flowbite-react'
import MangaDetailChapters from './chapters/page'

export default function MangaDetail (): React.ReactElement {
  return (<main className="wrapper">
    <BackNavigation target='/manga' label='Content Database'/>
    <div className='flex flex-col lg:flex-row gap-6 mt-4'>
      <CardDetail />
      <div className='flex-1'>
        <Button.Group>
          <Button color="gray" onClick={() => {}}>
            Profile
          </Button>
          <Button color="gray" onClick={() => {}}>
            Dashboard
          </Button>
          <Button color="gray" onClick={() => {}}>
            Settings
          </Button>
          <Button color="gray" onClick={() => {}}>
            Contacts
          </Button>
        </Button.Group>
        <MangaDetailChapters />
      </div>
    </div>
  </main>)
}
