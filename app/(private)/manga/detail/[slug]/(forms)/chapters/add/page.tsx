'use client'

import { Button, Form, InputField } from '@/components/Forms'
import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { useForm } from 'react-hook-form'
import ChapterAddForm from './chapterAddForm'

export default function MangaDetail ({ params }: { params: { slug: string }, children: React.ReactNode }): React.ReactElement {
  return (
    <main className="wrapper">
      <div className='flex flex-row justify-between'>
        <BackNavigation target={`/manga/detail/${params.slug}/`} label='Detail Manga' />
        <div className='lg:inline-flex hidden gap-2'>
          <Button text='Save Chapter as Draft' size='sm' style='pills' type='button' variant='gray'/>
          <Button text='Post Chapter' size='sm' style='pills' type='button'/>
        </div>
      </div>
      <Form methods={useForm()}>
        <ChapterAddForm />
      </Form>
    </main>
  )
}
