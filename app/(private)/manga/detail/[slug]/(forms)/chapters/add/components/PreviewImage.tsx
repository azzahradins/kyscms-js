import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { type IFileList } from '../page'
import { useState } from 'react'

interface IPreviewImage {
  itemList?: IFileList[]
}

export const PreviewImage = ({
  itemList
}: IPreviewImage): React.ReactElement => {
  const [position, setPosition] = useState(itemList?.length > 1 ? itemList[0].id : 0)

  return (
    <main className='w-3/4'>
      <section className='sticky top-4 bg-dark-2 p-4 rounded-lg'>
        <nav className='flex flex-row items-center justify-between mb-4'>
          <FaArrowLeft/>
          <p>Manga Post Preview</p>
          <FaArrowRight/>
        </nav>
        <article className='grid grid-cols-4'>
          {itemList?.map((image, index) => (
            <div key={image.id} className=''>
              <span className='text-sm font-semibold text-center mb-2'> Page {index + 1}</span>
              <img src={URL.createObjectURL(image.file)} className='mb-4 max-h-65 overflow-y-auto'/>
            </div>
          ))}
        </article>
      </section>
    </main>
  )
}
