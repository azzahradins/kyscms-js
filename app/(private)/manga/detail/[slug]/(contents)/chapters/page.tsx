'use client'

import { Button, Form, InputIcon } from '@/components/Forms'
import { type CustomFlowbiteTheme, Timeline } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FaSearchengin } from 'react-icons/fa'

const timeline: CustomFlowbiteTheme['timeline'] = {
  item: {
    root: {
      vertical: 'mb-5 ml-6'
    }
  }
}

export default function MangaDetailChapters (): React.ReactElement {
  const route = usePathname()

  return (
    <>
      <div className='p-4 dark:bg-dark-2 w-full rounded-lg flex flex-col md:flex-row gap-2 justify-between'>
        <Form methods={useForm()} onSubmit={useForm().handleSubmit((data, e) => { console.log(data) })} className='inline-flex'>
          <InputIcon
            name='search'
            icon={FaSearchengin}
            placeholder='Search Chapter'/>
        </Form>
        <Link href={`${route}/chapters/add`} className='self-end'>
          <Button
            type='button'
            size='xs'
            style='pills'
            text='Add New Chapter'/>
        </Link>
      </div>
      <div className='p-4 dark:bg-dark-2 w-full rounded-lg'>
        <Timeline theme={timeline}>
          <Timeline.Item className='mb-4'>
            <Timeline.Point/>
            <Timeline.Content>
              <Timeline.Time>
                Newest
              </Timeline.Time>
              <Timeline.Title className='mb-2'>
                <p>Chapter 301 <span className='text-sm font-light'>Uploader: Ivan</span></p>
              </Timeline.Title>
              <Timeline.Body className='flex flex-row gap-2'>
                <Button
                  type='button'
                  size='xs'
                  variant='warning'
                  style='pills'
                  text='Edit Ch'/>
                <Button
                  type='button'
                  variant='danger'
                  size='xs'
                  style='pills'
                  text='Delete Ch'/>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className='mb-4'>
            <Timeline.Point/>
            <Timeline.Content>
              <Timeline.Time>
                Mid
              </Timeline.Time>
              <Timeline.Title className='mb-2'>
                <p>Chapter 300 <span className='text-sm font-light'>Uploader: Raka</span></p>
              </Timeline.Title>
              <Timeline.Body className='flex flex-row gap-2'>
                <Button
                  type='button'
                  size='xs'
                  variant='warning'
                  style='pills'
                  text='Edit Ch'/>
                <Button
                  type='button'
                  variant='danger'
                  size='xs'
                  style='pills'
                  text='Delete Ch'/>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className='mb-2'>
            <Timeline.Point/>
            <Timeline.Content>
              <Timeline.Time>
                Oldest
              </Timeline.Time>
              <Timeline.Title className='mb-2'>
                Chapter 299
              </Timeline.Title>
              <Timeline.Body className='flex flex-row gap-2'>
                <Button
                  type='button'
                  size='xs'
                  variant='warning'
                  style='pills'
                  text='Edit Ch'/>
                <Button
                  type='button'
                  variant='danger'
                  size='xs'
                  style='pills'
                  text='Delete Ch'/>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  )
}
