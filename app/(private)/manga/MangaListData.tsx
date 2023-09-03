
import List from '@/app/(private)/manga/component/List'

import { useForm } from 'react-hook-form'

import { Form, InputIcon } from '@/components/Forms'
import { Button, type CustomFlowbiteTheme } from 'flowbite-react'
import { FaFilter, FaPlus, FaSearchengin } from 'react-icons/fa'

const customButton: CustomFlowbiteTheme['button'] = {
  color: {
    success: 'text-white bg-green-400 border border-transparent enabled:hover:bg-green-500 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800'
  }
}

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
              icon={FaSearchengin}
              placeholder='Search Keyword'/>
          </Form>
        </div>
        <div>
          <Button size="md" color="success" theme={customButton}>
            <FaPlus className="mr-2 h-4 w-4 self-center"/> Create New Collection
          </Button>
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
