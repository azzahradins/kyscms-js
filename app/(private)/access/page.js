'use client'

import { Title } from '@/components/Navigation/Title'
import { Table, Badge } from 'flowbite-react'
import Dummy from '../../../example-data/LogData.json'
import BodyTable from './TableCell'
import TableHead from './TableHead'
import { use, useEffect, useState } from 'react'
import { Button } from 'flowbite-react'

export default function UserAccess () {


const [prevPage,curPage] = useState(1)
let InitialState = Dummy.data.slice(prevPage,prevPage+10)
let [prevPageData,currData] = useState(InitialState)
useEffect(() => {
    currData(Dummy.data.slice(prevPage*10-10,prevPage*10))
    console.log("asdasd")
  }, [prevPage])

    return <main className='wrapper'>
      
      <Title value='User Management' className='mx-5 mt-4'/>

      <Table className='bg-dark-2'>
          <TableHead Head={Dummy.Head}></TableHead>
        <Table.Body>
          <BodyTable Body={prevPageData}></BodyTable>  
        </Table.Body>
        <h1>{prevPage}</h1>
      <Button onClick={() => curPage(prevPage+1)}>next page</Button>
      <Button onClick={() => curPage(prevPage-1)}>prev page</Button>
      </Table>
    </main>
}
