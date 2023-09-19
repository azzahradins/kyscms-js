'use client'

import { Form, InputFieldFb as InputField, SelectInput, Switch, TextArea } from '@/components/Forms'
import { useForm } from 'react-hook-form'

import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { FaCloudUploadAlt, FaCopy, FaInfoCircle, FaSave } from 'react-icons/fa'
import { Title } from '@/components/Navigation/Title'
import { Button } from 'flowbite-react'
import { InputFile } from '@/components/Forms/InputFile'

export default function MangaAdd (): React.ReactElement {
  const formMethod = useForm({
    defaultValues: {
      releaseYear: new Date().getFullYear(),
      isNsfw: false
    }
  })

  const submitData = (data: any): void => {
    console.log(data)
  }

  return (
    <main className='wrapper'>
      <BackNavigation target='/manga' label='Content Database' className='mb-4 lg:mb-0'/>
      <Title value='Add New Collection' className='mb-4'/>
      <Form methods={formMethod} onSubmit={submitData} className='grid grid-flow-row lg:grid-rows-none lg:grid-cols-2 gap-x-4 gap-y-3'>
        <div className='p-4 dark:bg-dark-2 w-full rounded-lg'>
          <span className='inline-flex gap-2 mb-2'> <FaInfoCircle className='self-center'/> Information </span>
          <InputField
            name='title'
            label='Title'/>
          <InputField
            name='altTitle'
            label='Alternative Title (Optional)'/>
          <Switch
            name='isNsfw'
            label="NSFW Content"/>
          <SelectInput
            name='genre'
            label='Content Genre'
            options={[{ value: 'abdi', label: 'Abdi' }, { value: 'ente', label: 'Ente' }, { value: 'draft', label: 'Draft' }, { value: 'completed', label: 'Completed' }]}
            isMulti/>
          <TextArea
            name='description'
            label='Description'/>
          <SelectInput
            name='status'
            label='Status Content'
            options={[{ value: 'on-going', label: 'On Going' }, { value: 'published', label: 'Published' }, { value: 'draft', label: 'Draft' }, { value: 'completed', label: 'Completed' }]}/>
          <SelectInput
            name='category'
            label='Content Category'
            options={[]}/>
        </div>
        <div className='border-gray-600 bg-gradient-to-r h-1 from-indigo-500 to-indigo-400 opacity-20 rounded-lg lg:hidden'/>
        <div>
          <div className='p-4 dark:bg-dark-2 w-full rounded-lg mb-0 lg:mb-4'>
            <span className='inline-flex gap-2 mb-2'> <FaCopy className='self-center'/> Publisher </span>
            <InputField
              name='serialization'
              label='Serialization (Optional)'/>
            <InputField
              name='releaseYear'
              label='Release Year'/>
            <SelectInput
              name='artist'
              label='Content Artist'
              options={[{ value: 'abdi', label: 'Abdi' }, { value: 'ente', label: 'Ente' }, { value: 'draft', label: 'Draft' }, { value: 'completed', label: 'Completed' }]}
              isMulti/>
          </div>

          <div className='my-3 border-gray-600 bg-gradient-to-r h-1 from-indigo-500 to-indigo-400 opacity-20 rounded-lg lg:hidden'/>

          <div className='p-4 dark:bg-dark-2 w-full rounded-lg'>
            <span className='inline-flex gap-2'> <FaCloudUploadAlt className='self-center'/> Attachment </span>
            <InputFile
              name='cover'
              label='Cover'
              accept='image/*'/>
            <InputFile
              name='banner'
              label='Banner'
              accept='image/*'/>
          </div>
        </div>
        <div className='inline-flex gap-2 lg:col-span-2 justify-end'>
            <Button color="warning" type="submit">
              Save as Draft
            </Button>
            <Button color="success" type="submit">
              <FaSave className="mr-2 h-4 w-4 self-center"/> Publish
            </Button>
        </div>
      </Form>
    </main>
  )
}
