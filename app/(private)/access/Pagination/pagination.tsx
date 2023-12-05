'use client'

import React from 'react'
import { Pagination as PG } from 'flowbite-react'

interface Properties {
  Total: number
  PageB: number
  PageN: any
}

export const Pagination = ({ Total, PageB, PageN = 0 }: Properties): React.ReactElement => {
  console.log(PageN)
  return (
    <PG
    currentPage={PageB}
    totalPages={Math.ceil(Total / 10)}
    onPageChange={PageN}
    renderOnZeroPageCount={null}/>
  )
}
