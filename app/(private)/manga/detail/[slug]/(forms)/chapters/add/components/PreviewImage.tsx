import { useState } from 'react'
import { type IFileList } from '../page'

interface IPreviewImage {
  itemList?: IFileList[]
}

export const PreviewImage = ({
  itemList = []
}: IPreviewImage): React.ReactElement => {
  const [preview, setPreview] = useState(true)

  const compact = (
    <article className='grid grid-cols-4 gap-2'>
      {itemList?.map((image, index) => (
        <div key={image.id} className='overflow-hidden'>
          <div className=''>
            <p className='text-sm font-semibold text-center'>Page {index + 1}</p>
            <p className='ml-2 font-light'>({image.file.name})</p>
          </div>
          <div className='h-16'>
            <img src={URL.createObjectURL(image.file)} className='w-full object-cover overflow-hidden' />
          </div>
        </div>
      ))}
    </article>
  )

  const perpage = (
    <article className='text-center grid grid-cols-1 gap-2 overflow-y-visible'>
      <p className='w-full italic'>Under development</p>
    </article>
  )

  const ListPreview = (): React.ReactElement => {
    switch (preview) {
      case true:
        return compact
      default:
        return perpage
    }
  }

  return (
    <section className='w-full sticky top-4 bg-dark-2 p-4 rounded-lg'>
      <nav className='flex flex-row items-center justify-between mb-4'>
        <p>Post Preview</p>
        <span className='text-sm' onClick={() => { setPreview(!preview) }}>change view mode</span>
      </nav>
      {(itemList.length > 0)
        ? ListPreview()
        : <p className='text-center italic'>Please add some files first</p>}
    </section>
  )
}
