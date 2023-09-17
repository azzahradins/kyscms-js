'use client'

import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { CardDetail } from './components/card'
import Tabs from '@/components/Page/Tabs'
import MangaDetailChapters from './chapters/page'
import MangaDetailCommunity from './community/page'
import MangaDetailSettings from './settings/page'

export default function MangaLayout ({ params, children }: { params: { slug: string }, children: React.ReactNode }): JSX.Element {
  const baseUrl = `/manga/detail/${params.slug}`
  return (
    <main className="wrapper">
      <BackNavigation target='/manga' label='Content Database'/>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-6 mt-4'>
        <CardDetail />
        <div className='flex-1'>
          <Tabs>
            <Tabs.Item
              key='chapters'
              title='Chapters'
              href={`${baseUrl}/`}
              component={<MangaDetailChapters/>}/>
            <Tabs.Item
              key='community'
              title='Community'
              href={`${baseUrl}/community`}
              component={<MangaDetailCommunity/>}/>
            <Tabs.Item
              key='settings'
              title='Settings'
              href={`${baseUrl}/settings`}
              component={<MangaDetailSettings/>}/>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
