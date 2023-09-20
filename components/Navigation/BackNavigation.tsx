import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

interface IBackNavigation {
  target: string
  label: string
  className?: string
}

export const BackNavigation: React.FC<IBackNavigation> = ({
  target,
  label,
  className
}: IBackNavigation) => {
  return (
    <Link href={target} className={`${className ?? ''} inline-flex mb-2 text-sm cursor-pointer`}>
      <FaArrowLeft className='self-center mr-4' /> <span className='cursor-pointer self-center'>Back to {label}</span>
    </Link>
  )
}
