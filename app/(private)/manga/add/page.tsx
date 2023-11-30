'use client'

import { Form, InputFieldFb as InputField, SelectInput, Switch, TextArea } from '@/components/Forms'
import { useForm } from 'react-hook-form'

import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { FaCloudUploadAlt, FaCopy, FaInfoCircle, FaSave } from 'react-icons/fa'
import { Title } from '@/components/Navigation/Title'
import { Button } from 'flowbite-react'
import { InputFile } from '@/components/Forms/InputFile'
import MangaAddForm from './form'

export default function MangaAdd (): React.ReactElement {
  const submitData = (data: any): void => {
    console.log(data)
  }

  return (
    <main className='wrapper'>
      <BackNavigation target='/manga' label='Content Database' className='mb-4 lg:mb-0'/>
      <Title value='Add New Collection' className='mb-4'/>
      <MangaAddForm submitData={submitData}/>
    </main>
  )
}
