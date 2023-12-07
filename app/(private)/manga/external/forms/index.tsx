'use client'

import { Button, Form, InputFieldFb as InputField } from '@/components/Forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const validationSchema = z.object({
  url: z.string().min(3, 'Url or title minimal 3 characters')
})

type MangaExternalFormSchema = z.infer<typeof validationSchema>

export default function MangaExternalForm (): React.ReactElement {
  const formMethod = useForm<MangaExternalFormSchema>({
    resolver: zodResolver(validationSchema)
  })

  return (
    <Form methods={formMethod} className='bg-dark-2 p-4 flex flex-col rounded-md rounded-b-none shadow-md'>
      <small>Step 1</small>
      <h3 className='font-semibold'>Search Content</h3>
      <span> You can search content using keywords OR link to content available.</span>
      <InputField
        name='url'
        placeholder='Url / Title'
        className='mb-2'/>
      <Button type='submit' text='Submit' className='mb-2 w-fit self-end'/>
    </Form>
  )
}
