import { InputFieldFb as InputField, SelectInput } from '@/components/Forms'
import Link from 'next/link'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaBars, FaCloudUploadAlt, FaInfoCircle } from 'react-icons/fa'

export default function ChapterAddForm (): React.ReactElement {
  const onDrop = useCallback((acceptedFiles: File) => {
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div className='flex flex-row gap-4'>
      <div className='w-full lg:w-2/5'>
        <div className='p-4 dark:bg-dark-2 rounded-lg mb-4'>
          <div className='mb-2'>
            <span className='inline-flex gap-2'> <FaInfoCircle className='self-center'/> Information </span>
            <p className='text-sm font-light text-gray-300'>Last chapter: <Link href='#'>[011 - Nama Chapter Bla Bla]</Link></p>
          </div>
          <InputField
            name='title'
            label='Title'/>
          <SelectInput
            name='server'
            label='Storage Location'
            options={[{ value: 'gd1', label: 'Google Drive 1' }, { value: 'wp1', label: 'Wordpress 1' }, { value: 'cd1', label: 'Custom Domain 1' }]}
            isMulti/>
        </div>
        <div className='p-4 dark:bg-dark-2 rounded-lg mb-4'>
          <div className='mb-2'>
            <span className='inline-flex gap-2'> <FaCloudUploadAlt className='self-center'/> Files </span>
          </div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive
                ? <p>Drop the files here ...</p>
                : <div className='border p-4 border-dotted rounded-lg h-32 flex justify-center'>
                    <span className='self-center'> Drop some file or click to open file explorer </span>
                  </div>
            }
          </div>
        </div>
        <div className='p-4 dark:bg-dark-2 rounded-lg'>
          <div className='mb-2'>
            <span className='inline-flex gap-2'> <FaBars className='self-center'/> Sort File </span>
          </div>
        </div>
      </div>
      <div>ia</div>
    </div>
  )
}
