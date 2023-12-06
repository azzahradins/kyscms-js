
import List from '@/app/(private)/manga/list/components/List'

import { useForm } from 'react-hook-form'

import { Form, InputIcon } from '@/components/Forms'
import { Button, type CustomFlowbiteTheme } from 'flowbite-react'
import { FaFilter, FaPlus, FaSearchengin } from 'react-icons/fa'
import Link from 'next/link'

const customButton: CustomFlowbiteTheme['button'] = {
  color: {
    success: 'text-white bg-green-400 border border-transparent enabled:hover:bg-green-500 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800'
  }
}

export default function MangaListData (): React.ReactElement {
  return (
    <div className='flex flex-col gap-5 text-dark-2'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col w-full lg:w-fit lg:flex-row gap-2'>
          <Form methods={useForm()} onSubmit={useForm().handleSubmit((data, e) => { console.log(data) })}>
            <InputIcon
              name='search'
              icon={FaSearchengin}
              placeholder='Search Keyword'/>
          </Form>
          <Button size="md" color="gray" className="text-bodydark3">
            <FaFilter className="mr-2 h-4 w-4 self-center"/> Add Filters
          </Button>
        </div>
        <Link href={'/manga/add'} className='hidden lg:block'>
          <Button size="md" color="success" theme={customButton}>
            <FaPlus className="mr-2 h-4 w-4 self-center"/> Create New Collection
          </Button>
        </Link>
      </div>
      <div>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
      <Link href={'/manga/add'} className='fixed lg:hidden bottom-3 right-4 inline-flex w-fit rounded-full p-3 text-white bg-green-400 dark:bg-green-600'>
        <FaPlus/>
      </Link>
    </div>
  )
}
