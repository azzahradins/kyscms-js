'use client'

import Card from '@/components/Page/Card'
import { LoremIpsum } from '@/example-data/strings'
import { useState, type ReactElement } from 'react'
import { motion } from 'framer-motion'
import { FaPencilAlt } from 'react-icons/fa'
import Modal from '@/components/Page/Modal'

export const CardDetail = (): ReactElement => {
  const [openEdit, toggleEdit] = useState(false)
  console.log('parent', openEdit);
  
  return <>
    <Card className='lg:max-w-70 h-8/12'>
      <Card.RenderImage
        src='https://wp.verover.my.id/wp-content/uploads/contents/a-gate-opened-on-my-first-day-as-a-politician/_cover.jpg'
        alt='stay away from my image'
        actionButton={
          <motion.button
            className='absolute opacity-90 bg-dark-2 rounded-l-lg px-3 py-1 top-2 -right-28 overflow-hidden text-sm'
            whileHover={{
              right: 0,
              opacity: 100,
              transition: { duration: 0.2 }
            }}
            onClick={() => toggleEdit(true)}>
            <div className='inline-flex justify-center gap-2'>
              <FaPencilAlt className='self-center'/> Edit Information
            </div>
          </motion.button>
        }/>
      <Card.Header>
        #Content Title
      </Card.Header>
      <Card.Body>
        <div className='flex flex-col gap-2'>
          <span className='font-light'>Content Type</span>
          <p className='line-clamp-4'><span className='text-green-200 font-semibold'>Description</span>: {LoremIpsum}</p>
          <div>
            <p><span className='text-indigo-300 font-semibold'>Genre</span>: Genre List, Genre List, Genre List, Genre List, Genre List</p>
          </div>
          <div className='grid grid-cols-2'>
            <div>
              <p className='text-blue-300 font-semibold'>Artist</p>
              <ul>
                <li>Artist 2</li>
                <li>Artist 3</li>
              </ul>
            </div>
            <div>
              <p className='text-blue-300 font-semibold'>Publisher</p>
              <ul>
                <li>Artist 2</li>
              </ul>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
    <Modal isOpen={openEdit} toggleModal={toggleEdit}>
      <Modal.Header>
        Edit %title% content info
      </Modal.Header>
      <Modal.Body>
        %form%
      </Modal.Body>
      <Modal.Footer>
        Please make sure your data is correct
      </Modal.Footer>
    </Modal>
  </> 
  
}
