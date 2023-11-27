import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { CardDetail } from './components/CardDetail'
import { TabDetail } from './components/TabDetail'

export default function MangaLayout ({ params, children }: { params: { slug: string }, children: React.ReactNode }): JSX.Element {
  return (
    <main className="wrapper">
      <BackNavigation target='/manga' label='Content Database' />
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-4 mt-4'>
        <CardDetail />
        <TabDetail slug={params.slug}/>
      </div>
    </main>
  )
}
