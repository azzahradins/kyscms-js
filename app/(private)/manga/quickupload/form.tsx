'use client'

import React from "react";

import { Button, Form, SelectInput } from "@/components/Forms";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthNavigateContext } from "@/hooks/authorization/navigate";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  content: z.object({
    label: z.string(),
    value: z.string()
  }).required()
})

type MangaQuickUploadFormSchema = z.infer<typeof validationSchema>

export default function MangaQuickUploadForm(): React.ReactElement {
  const router = useRouter()
  const formMethod = useForm<MangaQuickUploadFormSchema>({
    resolver: zodResolver(validationSchema)
  })

  const submitDetailPage = (data: MangaQuickUploadFormSchema) => {
    router.push(`/manga/detail/${data.content.value}`)
  }

  const submitNewChapter = (data: MangaQuickUploadFormSchema) => {
    router.push(`/manga/detail/${data.content.value}/chapters/add`)
  }

  return (
    <Form methods={formMethod} className={'gap-x-4 gap-y-3'}>
      <SelectInput
        name='content'
        label='Choose Content Title'
        options={[{ value: 'on-going', label: 'On Going' }, { value: 'published', label: 'Published' }, { value: 'draft', label: 'Draft' }, { value: 'completed', label: 'Completed' }]} />
      <Button
        text='Content Detail Page'
        size='sm' type='submit'
        onClick={formMethod.handleSubmit(submitDetailPage)}
        className="mr-2" />
      <Button
        text='Add New Chapter'
        size='sm'
        type='submit'
        onClick={formMethod.handleSubmit(submitNewChapter)}
        variant="success" />
    </Form>
  )
}