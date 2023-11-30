/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { Button, Form } from '@/components/Forms'
import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { useForm } from 'react-hook-form'
import { ChapterInformation } from './components/ChapterInformation'
import { PreviewImage } from './components/PreviewImage'
import { useState } from 'react'
import { SortImage } from './components/SortImage'
import { DragDrop } from './components/DragDrop'
import { Scheduler } from './components/Scheduler'
import { formatDateToIso } from '@/config/utils'

export interface IFileList {
  id: string
  file: File
}

export default function ChapterAdd({ params }: { params: { slug: string }, children: React.ReactNode }): React.ReactElement {
  const [fileList, setFileList] = useState<IFileList[]>([])

  const handleSubmit = (val: any): void => {
    // console.log(formatDateToIso(val.uploadSchedule))
    console.log(val)
  }

  return (
    <Form methods={useForm()} onSubmit={handleSubmit} className='wrapper'>
      <div className='flex flex-row justify-between mb-4'>
        <BackNavigation target={`/manga/detail/${params.slug}/`} label='Detail Manga' />
        <div className='lg:inline-flex hidden gap-2'>
          <Button text='Save Chapter as Draft' size='sm' style='pills' type='button' variant='gray' />
          <Button text='Post Chapter' size='sm' style='pills' type='submit' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full lg:min-w-75'>
          <ChapterInformation />
          <DragDrop
            setFileList={setFileList} />
          <SortImage
            fileList={fileList}
            setFileList={setFileList} />
        </div>
        <div className='w-full relative flex flex-col-reverse md:flex-col gap-4 h-fit'>
          <div className='lg:hidden inline-flex gap-2 justify-end'>
            <Button text='Save Chapter as Draft' size='sm' style='pills' type='button' variant='gray' />
            <Button text='Post Chapter' size='sm' style='pills' type='submit' />
          </div>
          <Scheduler />
          <PreviewImage
            itemList={fileList} />
        </div>
      </div>
    </Form>
  )
}
