'use client'

import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { CardDetail } from './components/card'

export default function MangaDetail (): React.ReactElement {
  return (<main className="wrapper">
    <BackNavigation target='/manga' label='Content Database'/>
    <div className='flex flex-col lg:flex-row gap-6 mt-4'>
      <CardDetail />
      <div className='flex-1'>ini dua</div>
    </div>
  </main>)
}
