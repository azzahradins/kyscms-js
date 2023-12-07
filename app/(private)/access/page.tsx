'use client'

import { Title } from '@/components/Navigation/Title'
import { Table } from 'flowbite-react'
import Dummy from '../../../example-data/LogData.json'
import { TableHeads } from './component/Table/TableHeads'
import { TableCell } from './component/Table/TableCel'
import { useEffect, useState } from 'react'

import { Pagination } from './Pagination/pagination'
import { SearchLogic as SearchBar } from './Search/Search'

import { type CustomFlowbiteTheme } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme['table'] = {
  root: {
    base: 'w-full text-left text-sm text-primary dark:text-gray-400',
    shadow:
      'absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10',
    wrapper: 'relative'
  },
  body: {
    base: 'group/body',
    cell: {
      base: 'group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4'
    }
  },
  head: {
    base: 'group/head text-xs uppercase text-gray-700 dark:text-gray-400',
    cell: {
      base: 'group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3'
    }
  },
  row: {
    base: 'group/row',
    hovered: 'hover:bg-red-500 dark:hover:bg-gray-600',
    striped:
      'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
  }
}

export default function LandingPage (): JSX.Element {
  const [prevPage, curPage] = useState(1)
  const InitialState = Dummy.data.slice(prevPage, prevPage + 10)
  const [prevPageData, setData] = useState(InitialState)
  useEffect(() => {
    setData(Dummy.data.slice(prevPage * 10 - 10, prevPage * 10))
  }, [prevPage])

  return (
    <main className='wrapper'>
      <SearchBar dummyData={Dummy}></SearchBar>
      <Title value='User Management' className='mx-5 mt-4'/>
      <Table theme={customTheme} hoverable className='bg-dark-2'>
        <TableHeads Data={Dummy.Head}></TableHeads>
        <Table.Body className='justify-center'>
            <TableCell className='flex justify-center' Data={prevPageData}></TableCell>
        </Table.Body>
      </Table>
      <Pagination PageB={prevPage} PageN={curPage} Total={Dummy.data.length}></Pagination>
    </main>)
}
