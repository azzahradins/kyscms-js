
import List from '@/app/(private)/manga/component/List'

import { useForm } from 'react-hook-form'

import { Form, InputIcon } from '@/components/Forms'
import { Button } from 'flowbite-react'
import { FaFilter } from 'react-icons/fa'

export default function MangaListData (): React.ReactElement {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-row justify-between'>
        <div className='inline-flex gap-2'>
          <Button size="md" color="gray" className="text-bodydark3">
            <FaFilter className="mr-2 h-4 w-4 self-center"/> Add Filters
          </Button>
          <Form methods={useForm()}>
            <InputIcon
              name='search'
              placeholder='Search Keyword'/>
          </Form>
        </div>
      </div>
      <div>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  )
}
