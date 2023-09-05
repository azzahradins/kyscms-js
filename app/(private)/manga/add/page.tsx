'use client'

import { Form, InputFieldFb as InputField, SelectInput, Switch, TextArea } from '@/components/Forms'
import { useForm } from 'react-hook-form'

import { BackNavigation } from '@/components/Navigation/BackNavigation'
import { FaCopy, FaInfoCircle, FaSave } from 'react-icons/fa'
import { Title } from '@/components/Navigation/Title'
import { Button } from 'flowbite-react'
import Select from 'react-select'

export default function MangaAdd (): React.ReactElement {
  const formMethod = useForm({
    defaultValues: {
      releaseYear: new Date().getFullYear()
    }
  })

  const submitData = (data: any): void => {
    console.log(data)
  }

  return (
    <main className='wrapper'>
      <BackNavigation target='/manga' label='Content Database'/>
      <Title value='Add New Collection' className='mb-4'/>
      <Form methods={formMethod} onSubmit={submitData} className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3'>
        <div>
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
          <TextArea
            name='description'
            label='Description'/>
          <SelectInput
            name='status'
            label='Status Content'
            options={[{ value: 'on-going', label: 'On Going' }]}/>
          <InputField
            name='serialization'
            label='Serialization (Optional)'/>
          <InputField
            name='releaseYear'
            label='Release Year'/>
          <Select
            unstyled
            isClearable={true}
            isSearchable={true}
            name="Category"
          />
        </div>
        <div>
          <span className='inline-flex gap-2 mb-2'> <FaCopy className='self-center'/> Attachment </span>
          <div>Cover</div>
          <div>Banner</div>
        </div>
        <div className='inline-flex gap-2 col-span-2 justify-end'>
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
