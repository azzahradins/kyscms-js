'use client'
import { Button } from '@/components/Forms'

export default function MangaDetailSettings (): React.ReactElement {
  return (
    <div className='p-4 dark:bg-dark-2 w-full rounded-lg justify-between flex flex-col gap-3 mb-4'>
      <section className='flex flex-row'>
        <div className='flex flex-col flex-1'>
          <label>Archive Content</label>
          <small>Temporarly remove content from website</small>
        </div>
        <div className='self-center'>
          <Button text="Archive" variant='danger' type='button' size='sm'/>
        </div>
      </section>
    </div>
  )
}
