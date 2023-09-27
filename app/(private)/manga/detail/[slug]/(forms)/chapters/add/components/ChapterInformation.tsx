import { InputFieldFb as InputField, SelectInput } from '@/components/Forms'
import Link from 'next/link'
import { FaInfoCircle } from 'react-icons/fa'

export const ChapterInformation = (): React.ReactElement => {
  return (
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
  )
}
