import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { type IFileList } from '../page'
import { useState } from 'react'

interface IPreviewImage {
  itemList?: IFileList[]
}

export const PreviewImage = ({
  itemList
}: IPreviewImage): React.ReactElement => {
  return (
    <main className='w-3/4'>
      <section className='sticky top-4 bg-dark-2 p-4 rounded-lg'>
        <nav className='flex flex-row items-center justify-between mb-4'>
          <p>Manga Post Preview</p>
        </nav>
        <article className='grid grid-cols-4 gap-2'>
          {itemList?.map((image, index) => (
            <div key={image.id} className='overflow-hidden'>
              <div className=''>
                <p className='text-sm font-semibold text-center'>Page {index + 1}</p>
                <p className='ml-2 font-light'>({image.file.name})</p>
              </div>
              <img src={URL.createObjectURL(image.file)} className='h-48 w-full object-cover overflow-hidden'/>
            </div>
          ))}
        </article>
      </section>
    </main>
  )
}
