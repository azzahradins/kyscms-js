import { randomBytes } from 'crypto'
import { type SetStateAction, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { type IFileList } from '../page'

export interface IDragDrop {
  setFileList: React.Dispatch<SetStateAction<IFileList[]>>
}

export const DragDrop = ({ setFileList }: IDragDrop): React.ReactElement => {
  const onDrop = useCallback((accepted: any) => {
    accepted.forEach((element: File) => {
      setFileList((oldList: any) => [...oldList, { id: randomBytes(8).toString('hex'), file: element }])
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/webp': []
    }
  })

  return (
    <div className='p-4 dark:bg-dark-2 rounded-lg mb-4'>
      <div className='mb-2'>
        <span className='inline-flex gap-2'> <FaCloudUploadAlt className='self-center'/> Files </span>
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='border p-4 border-dotted rounded-lg h-32 flex justify-center'>
        {isDragActive
          ? <span className='self-center'> Just drop it here </span>
          : <span className='self-center'> Drop or click to open file explorer </span>
        }
        </div>
      </div>
    </div>
  )
}
