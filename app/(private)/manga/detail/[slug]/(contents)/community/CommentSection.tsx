'use client'

import { type CustomFlowbiteTheme, Pagination } from 'flowbite-react'
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

export default function CommentSection (): React.ReactElement {
  const customPagination: CustomFlowbiteTheme['pagination'] = {
    pages: {
      previous: {
        base: 'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-indigo-600 enabled:dark:hover:text-white'
      },
      next: {
        base: 'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-indigo-600 enabled:dark:hover:text-white'
      },
      selector: {
        base: 'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-indigo-600 enabled:dark:hover:text-white',
        active: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-indigo-500 dark:text-white',
        disabled: 'opacity-50 cursor-normal'
      }
    }
  }

  const [currentPage, setCurrentPage] = useState(1)

  return (
  <div className='p-4 dark:bg-dark-2 w-full rounded-lg justify-between flex flex-col gap-3 mb-4'>
    <h3>Newest Comment</h3>
    <article className='flex flex-col gap-4'>
      {[...Array(8)].map((val) => (
        <div className='flex flex-row gap-2' key={val}>
          <section className='flex flex-col w-fit max-w-15 text-ellipsis overflow-hidden text-sm'>
            <div className='inline-flex items-center gap-2'>
              <FaArrowUp className='text-blue-500'/>
              <label>300k</label>
            </div>
            <div className='inline-flex items-center gap-2'>
              <FaArrowDown className='text-orange-500'/>
              <label>14k</label>
            </div>
          </section>
          <section className='border border-gray-600 flex-grow rounded-lg p-2'>
            <h4 className='font-medium'>%chapters%</h4>
            <p className='font-light'>%members%</p>
            <p>%comments%</p>
          </section>
        </div>
      ))}
    </article>
    <Pagination
      theme={customPagination}
      currentPage={currentPage}
      totalPages={100}
      previousLabel=''
      nextLabel=''
      onPageChange={(page) => {
        console.log(page)
        setCurrentPage(page)
      }}
      showIcons
      layout='navigation'
      className='place-self-start'/>
  </div>
  )
}
