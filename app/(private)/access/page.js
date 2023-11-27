'use client'

import { Title } from '@/components/Navigation/Title'
import { Table } from 'flowbite-react'
import Dummy from '../../../example-data/LogData.json'
import BodyTable from './Table/TableCell'
import TableHead from './Table/TableHead'
import {  useEffect, useState } from 'react'
import Paginasi from './Logic/pagination'
import { InputField } from '@/components/Forms'

export default function UserAccess () {

  const [prevPage,curPage] = useState(1)
  const [prevSearch, curSearch] = useState(Number)
  let InitialState = Dummy.data.slice(prevPage,prevPage+10)
  let [prevPageData,currData] = useState(InitialState)

  useEffect(() => {
      currData(Dummy.data.slice(prevPage*10-10,prevPage*10))
    }, [prevPage])


    return <main className='wrapper'>
      
      <input type='number' placeholder='Input here' onChange={(e) => {curSearch(e.target.value)}}></input>

      <h1>{prevPageData[prevSearch].Role}</h1>
      <Title value='User Management' className='mx-5 mt-4'/>
      <Table className='bg-dark-2'>
          <TableHead Head={Dummy.Head}></TableHead>
        <Table.Body>
          <BodyTable Body={prevPageData}></BodyTable>  
        </Table.Body>
      </Table>
      <Paginasi PageB={prevPage} PageN={curPage} Total={Dummy.data.length}></Paginasi>
    </main>
}
