import { InputDateTime } from '@/components/Forms/InputDateTime'
import { FaCalendarDay } from 'react-icons/fa'

export const Scheduler = (): React.ReactElement => {
  return (
    <div className='p-4 dark:bg-dark-2 rounded-lg mb-4'>
      <div className='mb-2'>
        <span className='inline-flex gap-2'> <FaCalendarDay className='self-center' /> Scheduler </span>
      </div>
      <InputDateTime name='uploadSchedule' label='Upload Scheduler' placeholder='Upload Scheduler'/>
    </div>
  )
}
